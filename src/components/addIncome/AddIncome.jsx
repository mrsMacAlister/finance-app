import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import "./addIncome.scss";

const AddIncome = () => {
  const { dispatch } = useContext(AppContext);

  const [day, setDay] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("travel");
  const [method, setMethod] = useState("none");
  const [income, setIncome] = useState("");

  /*const onChangeDate = e => {
    const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
    setValue(newDate);
    console.log(newDate); //value picked from date picker
  };
*/

  /* const handleMethod = (e) => {
    if (e.target.value === "none") {
      setMethod(null);
    } else {
      setMethod(e.target.value);
    }
  };*/

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(day, description, category, method, income);
    const incomes = {
      id: uuidv4(),
      day: day,
      description: description,
      category: category,
      method: method,
      income: income,
      outcome: null,
    };

    dispatch({
      type: "ADD_INCOME",
      payload: incomes,
    });
  };

  return (
    <div className="addIncome">
      <h2 className="title">ADD INCOME</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <label htmlFor="day">Date:</label>
          <input
            type="date"
            required="required"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            placeholder="Description"
            required="required"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            required="required"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="hi">Hi</option>
            <option value="travel">Travel</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="inputs">
          <label htmlFor="method">Payment method:</label>
          <select
            id="method"
            required="required"
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="none">none</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
            <option value="cash">Cash</option>
          </select>
        </div>
        <div className="inputs">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            step="any"
            required="required"
            id="amount"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddIncome;
