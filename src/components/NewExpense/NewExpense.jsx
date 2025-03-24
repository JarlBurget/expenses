import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'




import { useState } from 'react'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        } 
        props.onSaveExpenseData(expenseData)
    } 

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData= {saveExpenseDataHandler} />
        </div>

    )
} 

export default NewExpense