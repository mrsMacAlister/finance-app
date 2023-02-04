import "./budgeting.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Budgeting = () => {
  return (
    <div className="budgeting">
      <Sidebar />
      <div className="budgetingContainer">
        <Navbar />
        <div className="first">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
