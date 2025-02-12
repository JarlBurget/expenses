import React from "react";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import { useState } from "react";

const DUMMY_EXPENSES = [
    {
      id: 1,
      date: new Date(2025, 1, 25),
      title: "New Book",
      price: 30.99,
    },
    {
      id: 2,
      date: new Date(2025, 1, 23),
      title: "New Jeans",
      price: 99.99,
    },
    {
      id: 3,
      date: new Date(2024, 1, 23),
      title: "New Phone",
      price: 299.0,
    },
    {
      id: 4,
      date: new Date(2023, 1, 23),
      title: "New Banana",
      price: 9.79,
    },
  ];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandeler = (expense) => {
  
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandeler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;