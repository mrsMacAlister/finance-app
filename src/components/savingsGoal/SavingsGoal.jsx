import React from "react";
import "./savingsGoal.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import NorthernLights from "../../visuals/northern-lights.jpeg";

const SavingsGoal = () => {
  return (
    <div className="savingsGoal">
      <div className="goalAmount">
        <div className="amount">5.000 €</div>
      </div>
      <div className="goalDetails">
        <EditOutlinedIcon className="edit" />
        <div className="goalCore">
          <div className="title">Norhtern Lights in Finland</div>
          <div className="deadline">by September 2023</div>
          <img src={NorthernLights} alt="" className="image" />
          <div className="progress">progress "epruveta</div>
          <div className="description">
            Description a.k.a. more details on the goal
          </div>
        </div>
        <div className="japaneseSaving">
          Savings plan Japanese style (optional & for later)
        </div>
      </div>
    </div>
  );
};

export default SavingsGoal;
