import "./loans.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Loans = () => {
  return (
    <div className="loans">
      <Sidebar />
      <div className="loansContainer">
        <Navbar />
        <div className="construction">
          <h2>This page is still under construction.</h2>
          <h2>Please check again later.</h2>
        </div>
      </div>
    </div>
  );
};

export default Loans;
