import "./chart.scss";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
//import moment from "moment/moment";
/*import {  AreaChart,  Area,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  ResponsiveContainer } from "recharts";*/
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

//const [datas, setDatas] = useState([]);

/*
const CustomTooltip = ({ active, data }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        {data.map((dt) => (
          <div className="tooltips" key={dt.id}>
            <p className="title">{`${dt.Month}`}</p>
            <p className="balance">{`${dt.Balance}`}</p>
            <p className="desc">Anything you want can be displayed here.</p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
*/

const Chart = ({ aspect }) => {
  const [monthly, setMonthly] = useState([]);
  const [datas, setDatas] = useState([]);
  /* const data = [
    { id: 202204, Month: "April", Income: 3800, Outcome: 2560, Balance: 1240 },
    { id: 202205, Month: "May", Income: 4000, Outcome: 2400, Balance: 181 },
    { id: 202206, Month: "June", Income: 5000, Outcome: 2400, Balance: 1850 },
    { id: 202207, Month: "July", Income: 2050, Outcome: 2400, Balance: 340 },
    { id: 202208, Month: "Aug", Income: 4000, Outcome: 2400, Balance: 850 },
    { id: 202209, Month: "Sept", Income: 4000, Outcome: 2400, Balance: 1250 },
    {
      id: 202301,
      Month: "Jan",
      Income: 4000,
      Outcome: 2400,
      Balance: 1600,
    },
    { id: 202302, Month: "Feb", Income: 4000, Outcome: 4400, Balance: -200 },
    { id: 202303, Month: "Mar", Income: 3500, Outcome: 2400, Balance: 1100 },
  ];*/
  /* const gradientOffset = () => {
    const dataMax = Math.max(...datas.map((i) => i.Balance));
    const dataMin = Math.min(...datas.map((i) => i.Balance));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();*/

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

  useEffect(() => {
    const unsub1 = auth.onAuthStateChanged((authUser) => {
      unsub1();
      if (authUser) {
        const userID = authUser.uid;
        const fetchData = async () => {
          //add "index" to the above object about month info
          const today = new Date();
          /* const thisMonth = new Date(new Date().setMonth(today.getMonth())); //0-11, 2 = march
          const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
          const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));*/
          /*console.log(
            "TODAY IS: ",
            today,
            "THIS MONTH IS: ",
            thisMonth,
            "LAST MONTH IS: ",
            lastMonth,
            "PREVIOUS MONTH IS: ",
            prevMonth
          );
*/

          //today = moment(today).format("L");
          console.log("TODAY IS", today);

          //CONTINUE HERE//
          /*
          const d = new Date();
          let month = d.getMonth();
          let monthName = months[month];

          console.log("JUST THE MONTH --> ", month, monthName);
          //WHERE() IT .INDLUCES() + FOR LOOP?? .REDUCE(), .FILTER()
          //if currentMonth = -1, then month is 11 :3 lol
          for (let i = 0; i < 5; i++) {
            let currentMonth = month - i;

            console.log("test ", currentMonth, i);

            try {
              let monthlyDoc = [];

              const monthlyQuery = await getDocs(
                query(
                  collection(db, `${userID}expenses`),
                  where("year", "==", "2023")
                )
              );
              monthlyQuery.forEach((doc) => {
                const outcm = doc.data().outcome;
                const incm = doc.data().income;
                monthlyDoc.push({
                  outcome: Number(outcm),
                  income: Number(incm),
                });
              });
              const monthlyResults = monthlyDoc.reduce(
                (total, amount) => {
                  if (amount.outcome != null) {
                    return (total = {
                      outcome: total.outcome + amount.outcome,
                      income: total.income + amount.income,
                      id: uuidv4(),
                      Month: months[currentMonth],
                    });
                  }
                  return total;
                },
                { outcome: 0, income: 0, id: uuidv4(), Month: "May" }
              );
              const monthlyDt = {
                ...monthlyResults,
                Balance: monthlyResults.income - monthlyResults.outcome,
              };

              setMonthly([monthlyDt, ...monthly]);
            } catch (err) {
              console.log("error occured: ", err);
            }
          }*/

          
          //
          /*     const marchQ = query(
            collection(db, `${userID}expenses`),
            where("day", "<=", "2023-03-31"),
            where("day", ">", "2023-02-28")
          );

          const marchData = await getDocs(marchQ);
          // loop through and deduct 1 month each time
          //console.log(marchData.docs);
          let marchDocs = [];
          for (const marchSnapshot of marchData.docs) {
            const outcm = marchSnapshot.data().outcome;
            const incm = marchSnapshot.data().income;
            marchDocs.push({
              outcome: Number(outcm),
              income: Number(incm),
            });
          }
*/
          try {
            let mayDoc = [];
            let aprilDoc = [];
            let marchDoc = [];
            let febDoc = [];
            let janDoc = [];
            let decDoc = [];

            //May
            const mayQuery = await getDocs(
              query(
                collection(db, `${userID}expenses`),
                where("day", "<=", "2023-05-31"),
                where("day", ">", "2023-04-30")
              )
            );
            mayQuery.forEach((doc) => {
              const outcm = doc.data().outcome;
              const incm = doc.data().income;
              mayDoc.push({
                outcome: Number(outcm),
                income: Number(incm),
              });
            });
            const mayResults = mayDoc.reduce(
              (total, amount) => {
                if (amount.outcome != null) {
                  return (total = {
                    outcome: total.outcome + amount.outcome,
                    income: total.income + amount.income,
                    id: uuidv4(),
                    Month: "May",
                  });
                }
                return total;
              },
              { outcome: 0, income: 0, id: uuidv4(), Month: "May" }
            );
            const mayDt = {
              ...mayResults,
              Balance: mayResults.income - mayResults.outcome,
            };

            //april
            const aprilQuery = await getDocs(
              query(
                collection(db, `${userID}expenses`),
                where("day", "<=", "2023-04-30"),
                where("day", ">", "2023-03-31")
              )
            );
            aprilQuery.forEach((doc) => {
              const outcm = doc.data().outcome;
              const incm = doc.data().income;
              aprilDoc.push({
                outcome: Number(outcm),
                income: Number(incm),
              });
            });
            const aprilResults = aprilDoc.reduce(
              (total, amount) => {
                if (amount.outcome != null) {
                  return (total = {
                    outcome: total.outcome + amount.outcome,
                    income: total.income + amount.income,
                    id: uuidv4(),
                    Month: "April",
                  });
                }
                return total;
              },
              { outcome: 0, income: 0, id: uuidv4(), Month: "April" }
            );
            const aprilDt = {
              ...aprilResults,
              Balance: aprilResults.income - aprilResults.outcome,
            };

            //march
            const marchQuery = await getDocs(
              query(
                collection(db, `${userID}expenses`),
                where("day", "<=", "2023-03-31"),
                where("day", ">", "2023-02-28")
              )
            );
            marchQuery.forEach((doc) => {
              const outcm = doc.data().outcome;
              const incm = doc.data().income;
              marchDoc.push({
                outcome: Number(outcm),
                income: Number(incm),
              });
            });
            const marchResults = marchDoc.reduce(
              (total, amount) => {
                if (amount.outcome != null) {
                  return (total = {
                    outcome: total.outcome + amount.outcome,
                    income: total.income + amount.income,
                    id: uuidv4(),
                    Month: "March",
                  });
                }
                return total;
              },
              { outcome: 0, income: 0, id: uuidv4(), Month: "March" }
            );
            const marchDt = {
              ...marchResults,
              Balance: marchResults.income - marchResults.outcome,
            };
            //feb
            const febQuery = await getDocs(
              query(
                collection(db, `${userID}expenses`),
                where("day", "<=", "2023-02-28"),
                where("day", ">", "2023-01-31")
              )
            );
            febQuery.forEach((doc) => {
              const outcm = doc.data().outcome;
              const incm = doc.data().income;
              febDoc.push({
                outcome: Number(outcm),
                income: Number(incm),
              });
            });
            const febResults = febDoc.reduce(
              (total, amount) => {
                if (amount.outcome != null) {
                  return (total = {
                    outcome: total.outcome + amount.outcome,
                    income: total.income + amount.income,
                    id: uuidv4(),
                    Month: "Feb",
                  });
                }
                return total;
              },
              { outcome: 0, income: 0, id: uuidv4(), Month: "Feb" }
            );
            const febDt = {
              ...febResults,
              Balance: febResults.income - febResults.outcome,
            };
            //jan
            const janQuery = await getDocs(
              query(
                collection(db, `${userID}expenses`),
                where("day", "<=", "2023-01-31"),
                where("day", ">", "2022-12-31")
              )
            );
            janQuery.forEach((doc) => {
              const outcm = doc.data().outcome;
              const incm = doc.data().income;
              janDoc.push({
                outcome: Number(outcm),
                income: Number(incm),
              });
            });
            const janResults = janDoc.reduce(
              (total, amount) => {
                if (amount.outcome != null) {
                  return (total = {
                    outcome: total.outcome + amount.outcome,
                    income: total.income + amount.income,
                    id: uuidv4(),
                    Month: "Jan",
                  });
                }
                return total;
              },
              { outcome: 0, income: 0, id: uuidv4(), Month: "Jan" }
            );
            const janDt = {
              ...janResults,
              Balance: janResults.income - janResults.outcome,
            };
            //dec
            const decQuery = await getDocs(
              query(
                collection(db, `${userID}expenses`),
                where("day", "<=", "2022-12-31"),
                where("day", ">", "2022-11-30")
              )
            );
            decQuery.forEach((doc) => {
              const outcm = doc.data().outcome;
              const incm = doc.data().income;
              if (outcm == null && incm == null) {
                decDoc.push({
                  outcome: 0,
                  income: 0,
                });
              } else if (outcm != null || incm != null) {
                decDoc.push({
                  outcome: Number(outcm),
                  income: Number(incm),
                });
              }
            });
            console.log("dec doc", decDoc);

            const decResults = decDoc.reduce(
              (total, amount) => {
                if (amount.outcome != null || amount.income != null) {
                  return (total = {
                    outcome: total.outcome + amount.outcome,
                    income: total.income + amount.income,
                    id: uuidv4(),
                    Month: "Dec",
                  });
                }
                return total;
              },
              { outcome: 0, income: 0, id: uuidv4(), Month: "Dec" }
            );
            console.log("dec results", decResults);
            const decDt = {
              ...decResults,
              Balance: decResults.income - decResults.outcome,
            };

            //
            setDatas([decDt, janDt, febDt, marchDt, aprilDt, mayDt]);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      } else {
        console.log("not logged in");
      }
    });
    unsub1();
  }, []);

  console.log("DATAs", datas, "Datas balance", datas.Balance);
  console.log("MONTHLY DATA ", monthly, "Monthly balance: ", monthly.Balance);
  return (
    <div className="chart">
      <div className="title">CHART</div>
      <div className="graph">
        {/*<ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="Income" fill="#8884d8" />
          </BarChart>
  </ResponsiveContainer>*/}
        <ResponsiveContainer aspect={aspect}>
          <BarChart
            width={500}
            height={400}
            data={datas}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis />
            <Tooltip />
            <ReferenceLine y={0} stroke="#000" />
            <Bar
              dataKey="Balance"
              fill={
                datas.Balance < 0
                  ? "red"
                  : datas.Balance > 0
                  ? "green"
                  : "rgba(0, 128 ,0 , .45)"
              }
            />
          </BarChart>
        </ResponsiveContainer>

        {/* <ResponsiveContainer aspect={aspect}>
          <AreaChart
            width={500}
            height={400}
            data={datas}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Month" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="green" stopOpacity={0.5} />
                <stop offset={off} stopColor="red" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="Balance"
              stroke="gray"
              fill="url(#splitColor)"
            />
          </AreaChart>
          </ResponsiveContainer>*/}
      </div>
    </div>
  );
};

export default Chart;
