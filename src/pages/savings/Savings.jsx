import "./savings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SavingsW from "../../components/savingsW/SavingsW";
import SavingsGoal from "../../components/savingsGoal/SavingsGoal";
import { Link } from "react-router-dom";

const Savings = () => {
  return (
    <div className="savings">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="savingsContainer">
          <div className="heading">
            <h2>My Goals & Dreams, My Savings</h2>
            <Link to="/savings/add-savings">
              <div className="addBtn">Add New</div>
            </Link>
          </div>
          <div className="top">
            <SavingsW type="savings1" />
          </div>
          <div className="bottom">
            <SavingsGoal />
          </div>
        </div>
        <div className="construction">
          <h2>This page is still under construction.</h2>
          <h2>Please check again later.</h2>
          <div className="planning">
            <ol>
              <h3>Structure (2 specific components multiplied)</h3>
              <li>
                .map() through Savings Widgets on top (w/ goal amount, deadline,
                title), widgets are centered (justify content: space-around,
                align-items: center)
              </li>
              <li>
                .map() through each savings goal
                <ul>
                  <li>goal amount</li>
                  <li>title</li>
                  <li>deadline</li>
                  <li>progress "epruveta"</li>
                  <li>image for vision</li>
                  <li>description</li>
                  <li>*Button to edit*</li>
                  <li>(/*Japanese style for saving money*/)</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
