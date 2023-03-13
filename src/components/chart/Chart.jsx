import "./chart.scss";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
//import moment from "moment/moment";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//const [datas, setDatas] = useState([]);

const data = [
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
];

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
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.Balance));
    const dataMin = Math.min(...data.map((i) => i.Balance));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const unsub1 = auth.onAuthStateChanged((authUser) => {
      unsub1();
      if (authUser) {
        const userID = authUser.uid;
        const fetchData = async () => {
          /* const today = new Date(2023, 2, 8);
          const thisMonth = new Date(new Date().setMonth(today.getMonth())); //0-11, 2 = march
          const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
          const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
          console.log(
            "TODAY IS: ",
            today,
            "THIS MONTH IS: ",
            thisMonth,
            "LAST MONTH IS: ",
            lastMonth,
            "PREVIOUS MONTH IS: ",
            prevMonth
          );

          //today = moment(today).format("L");
          console.log("TODAY IS", today);
*/

          const marchQuery = query(
            collection(db, `${userID}expenses`),
            where("day", "<=", "2023-03-31"),
            where("day", ">", "2023-02-28")
          );

          const marchData = await getDocs(marchQuery);
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
          //console.log("MARCH DOCS", marchDocs);
          const marchResults = marchDocs.reduce((total, amount) => {
            if (amount.outcome != null) {
              return (total = {
                outcome: total.outcome + amount.outcome,
                income: total.income + amount.income,
                id: uuidv4(),
                month: "March",
              });
            }
          });
          console.log("March Results", marchResults);

          setDatas(...datas, {
            ...marchResults,
            balance: marchResults.income - marchResults.outcome,
          });
        };
        fetchData();
      } else {
        console.log("not logged in");
      }
    });
    unsub1();
  }, []);

  console.log("DATAs", datas);
  return (
    <div className="chart">
      <div className="title">CHART</div>
      <div className="graph">
        <ResponsiveContainer aspect={aspect}>
          <AreaChart
            width={500}
            height={400}
            data={data}
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
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
