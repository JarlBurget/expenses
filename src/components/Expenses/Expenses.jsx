import { useState } from 'react'
import ExpenseItem from './ExpenseItem.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.jsx'



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2025')

    const filterChangeHandler = (selectedYear) => { 
      setFilteredYear(selectedYear)
        console.log(`Year data in Expenses.jsx ${selectedYear}` )
    }
    props.expenses.map((expense) => {
      return <ExpenseItem expenseData={expense}/>
    })

  return (
    <Card className='expenses'>
        <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
        {
          props.expenses.map((expense) => {
            return <ExpenseItem expenseData={expense} key={expense.id}/>
            })
        }
    </Card>
  )
}

export default Expenses;
