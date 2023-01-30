import "./investments.scss";

//add an icon/logo for each cryptocurrentcy, precious metals...
//map them (new component)
const Investments = ({ title, name, amount, currency }) => {
  return (
    <div className="investments">
      <div className="title">{title}</div>
      <div className="investment">
        <div className="name">{name}</div>
        <div className="amount">{amount}</div>
        <span className="currency">{currency}</span>
      </div>
    </div>
  );
};

export default Investments;
