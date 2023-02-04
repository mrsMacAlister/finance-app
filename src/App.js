import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Transactions from "./pages/transactions/Transactions";
import Budgeting from "./pages/budgeting/Budgeting";
import Savings from "./pages/savings/Savings";
import Loans from "./pages/loans/Loans";
import Valuables from "./pages/valuables/Valuables";
import Resources from "./pages/resources/Resources";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="transactions" element={<Transactions />} />{" "}
            <Route path="budgeting" element={<Budgeting />} />
            <Route path="savings" element={<Savings />} />
            <Route path="loans" element={<Loans />} />
            <Route path="valuables" element={<Valuables />} />
            <Route path="resources" element={<Resources />} />
            <Route>
              <Route />
            </Route>
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
