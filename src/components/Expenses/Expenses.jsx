import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2024'); // Algne valitud aasta

  const filterChangeHandler = (selectedYear) => {
    console.log('Filtered Year in Expenses.js', selectedYear); // Kontrollime, milline aasta valiti
    setFilteredYear(selectedYear); // Uuendame valitud aasta väärtuse
  };

  // Filtreerime kulud vastavalt valitud aastale
  const filteredExpenses = props.expenses.filter((expense) =>
    expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      {/* Edastame valitud aasta ja filteri muutmise funktsiooni ExpensesFilter-le */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} /> 
      
      {/* Kuvame ainult need kulud, mis vastavad filtrile */}
      {filteredExpenses.map(expense => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
