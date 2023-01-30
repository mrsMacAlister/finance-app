import "./debt.scss";
import { CircularProgressbar } from "react-circular-progressbar";

const Debt = () => {
  return (
    <div className="debt">
      Debt
      <div className="progressbar">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Debt;
