import "./loans.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Debt from "../../components/debt/Debt";
import { Link } from "react-router-dom";

const Loans = () => {
  return (
    <div className="loans">
      <Sidebar />
      <div className="loansContainer">
        <Navbar />
        <div className="heading">
          <h2>My Debt Being Paid Off</h2>
          <Link to="/savings/add-loan">
            <div className="addBtn">Add New</div>
          </Link>
        </div>
        <div className="loan-items">loans.map() + circular progressbar</div>
      </div>
    </div>
  );
};

export default Loans;
