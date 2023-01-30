import "./piggybank.scss";

const Piggybank = () => {
  return (
    <div className="piggybank">
      <div className="title">Piggybank</div>
      <img
        src="https://www.svgrepo.com/show/253917/piggy-bank-euro.svg"
        alt=""
      />
      <div className="goal">Goal: 5.320 €</div>
    </div>
  );
};

export default Piggybank;
