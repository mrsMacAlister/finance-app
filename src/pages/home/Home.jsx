import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Piggybank from "../../components/piggybank/Piggybank";
import Debt from "../../components/debt/Debt";
import CalendarW from "../../components/calendarW/CalendarW";
import Investments from "../../components/investments/Investments";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="first">
          <div className="widgets">
            <Widget type="balance" />
            <Widget type="outcome" />
            <Widget type="income" />
          </div>
          <Chart aspect={3 / 1} />
        </div>
        <div className="second">
          <Piggybank />
          <Debt />
          <CalendarW />
        </div>
        <div className="third">
          Investments
          <Investments title="CRYPTO" name="" amount="" currency="" />
          <Investments title="" name="" amount="" currency="" />
          <Investments title="" name="" amount="" currency="" />
          <Investments title="" name="" amount="" currency="" />
        </div>
        <div className="fourth">Google Calendar API || (MUI?) calendar</div>
      </div>
    </div>
  );
};

export default Home;
