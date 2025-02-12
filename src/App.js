import React from "react";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import { useState } from "react";

const App = () => {
    const DYMMY_EXPENSES = [
      {
      id:'id1',
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      id:'id2',
      date: new Date(2024, 10, 12),
      title: 'New jeans',
      price: 80.99
    },
    {
      id:'id3',
      date: new Date(2024, 10, 15),
      title: 'New bag',
      price: 139.99
    }
    ]
  
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }
  
    return (
      <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses expenses={DYMMY_EXPENSES} />
      </div>
    );
  };
  
  export default App