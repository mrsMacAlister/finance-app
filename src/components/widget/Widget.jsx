import "../widget/widget.scss";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "balance":
      data = {
        title: "BALANCE",
        amount: "+ 3.657 €",
        goal: "+ 2.500 €",
      };
      break;
    case "outcome":
      data = {
        title: "OUTCOME",
        amount: "- 2.348 €",
        goal: "- 4.500 €",
      };
      break;
    case "income":
      data = {
        title: "INCOME",
        amount: "+ 7.400 €",
        goal: "+ 5.000 €",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="title">{data.title}</div>
      <div className="amount">{data.amount}</div>
      <div className="goal">Goal: {data.goal}</div>
    </div>
  );
};

export default Widget;
