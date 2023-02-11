import "./transactions.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
//import transactionsRows from "../../components/transactionsRows/transactionsRows";
import { useContext } from "react";
import { TransactionsSourceContext } from "../../TransactionsSourceContext";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  const { rows } = useContext(TransactionsSourceContext);

  return (
    <div className="transactions">
      <Sidebar />
      <div className="transactionsContainer">
        <Navbar />
        <div className="main">
          <div className="left">
            Table
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Description</TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Payment Method</TableCell>
                    <TableCell align="center">Income&nbsp;($+)</TableCell>
                    <TableCell align="center">Outcome&nbsp;($-)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {row.date}
                      </TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.paymentM}</TableCell>
                      <TableCell align="center">{row.income}</TableCell>
                      <TableCell align="right">{row.outcome}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="right">
            <div className="top">Categories</div>
            <div className="bottom">Pie Chart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
