import "../widget/widget.scss";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
//import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

const Widget = ({ type }) => {
  const [outcome, setOutcome] = useState(null);
  const [income, setIncome] = useState(null);

  let balance = income - outcome;
  let data;

  switch (type) {
    case "balance":
      data = {
        title: "BALANCE",
        amount: balance,
        goal: "+ 2.500 €",
      };
      break;
    case "budget":
      data = {
        title: "BUDGET",
        amount: "4000",
        goal: "4000",
      };
      break;
    case "outcome":
      data = {
        title: "OUTCOME",
        amount: outcome,
        goal: "- 4.500 €",
      };
      break;
    case "income":
      data = {
        title: "INCOME",
        amount: income,
        goal: "+ 5.000 €",
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (authUser) => {
      unsub();
      if (authUser) {
        try {
          let currentMonth = new Date().getMonth();
          console.log("current month: ", currentMonth);
          let currentYear = new Date().getFullYear();
          console.log("current year: ", currentYear);
          const userID = authUser.uid;
          const fetchData = async () => {
            let outcomeList = [];
            let incomeList = [];

            const outcomeQuery = query(
              collection(db, `${userID}expenses`),
              where("month", "array-contains", currentMonth),
              where("year", "array-contains-any", [currentYear]),
              where("outcome", "!=", null)
            );

            const outcomeQ = await getDocs(outcomeQuery);

            outcomeQ.forEach((doc) => {
              const outc = { outcome: doc.data().outcome };
              outcomeList.push(parseFloat(outc.outcome, 10));
            });
            //console.log("outcome list", outcomeList);
            const totalOutcome = outcomeList.reduce((total, item) => {
              return total + item;
            }, 0);

            //console.log("Total OUTCOME", totalOutcome);
            setOutcome(totalOutcome);

            const incomeQuery = query(
              collection(db, `${userID}expenses`),
              where("month", "array-contains-any", [currentMonth]),
              where("year", "==", currentYear),
              where("income", "!=", null)
            );

            const incomeQ = await getDocs(incomeQuery);

            incomeQ.forEach((doc) => {
              const inc = { income: doc.data().income };
              incomeList.push(parseFloat(inc.income, 10));
            });
            //console.log("outcome list", outcomeList);
            const totalIncome = incomeList.reduce((total, item) => {
              return total + item;
            }, 0);
            //console.log("Total INCOME", totalIncome);
            setIncome(totalIncome);
          };
          fetchData();
        } catch (err) {
          console.log(err);
        }
      }
    });
  }, []);

  return (
    <div className="widget">
      <div className="title">{data.title}</div>
      <div className="amount">{data.amount ? data.amount : 0} €</div>
      <div className="goal">Goal: {data.goal}</div>
    </div>
  );
};

export default Widget;
