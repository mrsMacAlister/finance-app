import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
//import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
//import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="link">
          <span className="logo">My Money 🪙</span>{" "}
        </Link>
      </div>
      <div className="center">
        <ul>
          <Link to="/" className="link">
            <li className="page">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/transactions" className="link">
            <li className="page">
              <AccountBalanceWalletOutlinedIcon className="icon" />
              <span>Transactions</span>
            </li>
          </Link>
          <Link to="/budgeting" className="link">
            <li className="page">
              <CalculateOutlinedIcon className="icon" />
              <span>Budgeting</span>
            </li>
          </Link>
          <Link to="/savings" className="link">
            <li className="page">
              <SavingsOutlinedIcon className="icon" />
              <span>Savings</span>
            </li>
          </Link>
          <Link to="/loans" className="link">
            <li className="page">
              <AccountBalanceOutlinedIcon className="icon" />
              <span>Loans</span>
            </li>
          </Link>
          <Link to="/investments" className="link">
            <li className="page">
              <CurrencyBitcoinOutlinedIcon className="icon" />
              <span>Investments</span>
            </li>
          </Link>
          <Link to="/calendar" className="link">
            <li className="page">
              <CalendarMonthOutlinedIcon className="icon" />
              <span>Calendar</span>
            </li>
          </Link>
          <Link to="/resources" className="link">
            <li className="page">
              <CollectionsBookmarkOutlinedIcon className="icon" />
              <span>Resources</span>
            </li>
          </Link>
          <hr />
          <li className="page">
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li className="page">
            <LogoutOutlinedIcon className="icon" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <hr />
        <div className="colors">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
      <footer>
        <span>mrs.macAlister</span>
      </footer>
    </div>
  );
};

export default Sidebar;
