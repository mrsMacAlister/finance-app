import "./debt.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Debt = () => {
  return (
    <div className="debt">
      <div className="title">DEBT</div>

      <div className="progressbar">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
      </div>
      <div className="goal">Deadline:</div>
    </div>
  );
};

export default Debt;
