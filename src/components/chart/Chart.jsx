import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    id: 1,
    Month: "Jan",
    Income: 4000,
    Outcome: 2400,
    Balance: 1600,
  },
  { id: 2, Month: "Feb", Income: 4000, Outcome: 4400, Balance: -200 },
  { id: 3, Month: "Mar", Income: 3500, Outcome: 2400, Balance: 1100 },
  { id: 4, Month: "April", Income: 3800, Outcome: 2560, Balance: 1240 },
  { id: 5, Month: "May", Income: 4000, Outcome: 2400, Balance: 181 },
  { id: 6, Month: "June", Income: 5000, Outcome: 2400, Balance: 1850 },
  { id: 7, Month: "July", Income: 2050, Outcome: 2400, Balance: 340 },
  { id: 8, Month: "Aug", Income: 4000, Outcome: 2400, Balance: 850 },
  { id: 9, Month: "Sept", Income: 4000, Outcome: 2400, Balance: 1250 },
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

const Chart = ({ aspect }) => {
  return (
    <div className="chart">
      Chart
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
  );
};

export default Chart;
