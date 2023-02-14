import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  columns: [
    //{ field: "id", headerName: "ID", width: 90 },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      editable: true,
    },
    {
      field: "paymentM",
      headerName: "Payment method",
      width: 150,
      editable: true,
    },

    {
      field: "income",
      headerName: "+€",
      type: "number",
      minWidth: 20,
      editable: true,
    },
    {
      field: "outcome",
      headerName: "-€",
      type: "number",
      minWidth: 20,
      editable: true,
    },
    {
      field: "buttons",
      headerName: "Add/Delete/Edit",
      minWidth: 20,
      editable: true,
    },
  ],
  rows: [
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "lunch with a friend",
      category: "food",
      paymentM: "Mastercard",
      income: "",
      outcome: "36",
    },
    {
      id: uuidv4(),
      date: "03/03/2023",
      description: "Netlix subscription",
      category: "entertainment",
      paymentM: "Visa",
      income: "",
      outcome: "17.99",
    },
    {
      id: uuidv4(),
      date: "03/03/2023",
      description: "groceries",
      category: "food",
      paymentM: "Visa",
      income: "",
      outcome: "56.73",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return plane ticket to Amsterdam",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "392",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
    {
      id: uuidv4(),
      date: "04/03/2023",
      description: "return",
      category: "travel",
      paymentM: "Visa",
      income: "",
      outcome: "1",
    },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        columns: state.columns,
        rows: state.rows,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
