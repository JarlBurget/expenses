import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    // Lisame kaitse tühja või määramata massiivi jaoks

    return (
        <Card className="expenses">
            <ExpenseItem data={props.expenses[0]} />
            <ExpenseItem data={props.expenses[1]} />
        </Card>
    );
};

export default Expenses;
