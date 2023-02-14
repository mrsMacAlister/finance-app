import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Transactions from "./pages/transactions/Transactions";
import Budgeting from "./pages/budgeting/Budgeting";
import Savings from "./pages/savings/Savings";
import Loans from "./pages/loans/Loans";
import Investments from "./pages/investments/Investments";
import Calendar from "./pages/calendar/Calendar";
import Resources from "./pages/resources/Resources";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="budgeting" element={<Budgeting />} />
              <Route path="savings" element={<Savings />} />
              <Route path="loans" element={<Loans />} />
              <Route path="investments" element={<Investments />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="resources" element={<Resources />} />
              <Route>
                <Route />
              </Route>
              <Route />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
