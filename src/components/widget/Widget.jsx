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
          const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          let currentMonth = new Date().getMonth();
          console.log("current month: ", currentMonth);
          let currentYear = new Date().getFullYear();
          console.log("current year: ", currentYear);

          let todayMonth = months[currentMonth];
          console.log("today month = ", todayMonth);

          const userID = authUser.uid;
          const fetchData = async () => {
            let outcomeList = [];
            let incomeList = [];

            const thisMonthQuery = query(
              collection(db, `${userID}expenses`),
              where("mmyy", "array-contains", [todayMonth, currentYear])
              //where("year", "array-contains", currentYear)
            );

            /*      const outcomeQuery = query(
              thisMonthQuery,
              where("outcome", "!=", null)
            );*/

            const outcomeQ = await getDocs(thisMonthQuery);

            outcomeQ.forEach((doc) => {
              if (outcome) {
                const outc = { outcome: doc.data().outcome };
                outcomeList.push(parseFloat(outc.outcome, 10));
                console.log("outcome is not null");
                return;
              }
            });
            //console.log("outcome list", outcomeList);
            const totalOutcome = outcomeList.reduce((total, item) => {
              return total + item;
            }, 0);

            //console.log("Total OUTCOME", totalOutcome);
            setOutcome(totalOutcome);

            /*   const incomeQuery = query(
              thisMonthQuery,
              where("income", "!=", null)
            );*/

            const incomeQ = await getDocs(thisMonthQuery);

            incomeQ.forEach((doc) => {
              if (income) {
                const inc = { income: doc.data().income };
                incomeList.push(parseFloat(inc.income, 10));
                return incomeList;
              }
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
