import React from "react";
import "./savingsW.scss";
import { v4 as uuidv4 } from "uuid";

const SavingsW = () => {
  let data = [
    {
      id: uuidv4(),
      title: "NORHTERN LIGHTS IN FINLAND",
      amount: "5.000 €",
      deadline: "September 2024",
    },
    {
      id: uuidv4(),
      title: "HOUSE DOWNPAYMENT",
      amount: "30.000 €",
      deadline: "August 2028",
    },
    {
      id: uuidv4(),
      title: "LIVE SEMINAR",
      amount: "2.500 €",
      deadline: "March 2023",
    },
  ];

  return (
    <div className="savingsW">
      {data.map((dt) => (
        <div className="widget" key={dt.id}>
          <div className="title">{dt.title}</div>
          <div className="amount">{dt.amount}</div>
          <div className="deadline">by {dt.deadline}</div>
        </div>
      ))}
      <div className="addSavings">
        <button className="add">+</button>
      </div>
    </div>
  );
};

export default SavingsW;
