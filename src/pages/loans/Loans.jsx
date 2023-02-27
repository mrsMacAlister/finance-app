import "./loans.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Debt from "../../components/debt/Debt";

const Loans = () => {
  return (
    <div className="loans">
      <Sidebar />
      <div className="loansContainer">
        <Navbar />
        <div className="heading">
          <h2>My Debt Being Paid Off</h2>
          <div className="addBtn">Add New</div>
          <p>debt.map()</p>
        </div>
        <div className="construction">
          <h2>This page is still under construction.</h2>
          <h2>Please check again later.</h2>
        </div>
      </div>
    </div>
  );
};

export default Loans;
