import "./transactions.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";
import AddExpense from "../../components/addExpense/AddExpense";
import AddIncome from "../../components/addIncome/AddIncome";
//import TransactionsGrid from "../../components/transactionsTable/TransactionsGrid";
//import transactionsRows from "../../components/transactionsRows/transactionsRows";
/*

*/
/*function createData(date, description, category, method, income, outcome) {
  return { date, description, category, method, income, outcome };
}*/

/*const rows = [
  createData("05 / 08 / 2023", "Frozen yoghurt", "food", "card", 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];*/

const Transactions = () => {
  //const { rows } = useContext(AppContext);

  return (
    <div className="transactions">
      <Sidebar />
      <div className="transactionsContainer">
        <Navbar />
        <div className="main">
          <div className="top-to-right">
            <div className="top">
              <AddExpense />
              
              <AddIncome />
            </div>
            <div className="bottom">Pie Chart</div>
          </div>
          <div className="left-to-bottom">
            Table2
            <TransactionsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

/*

*/
