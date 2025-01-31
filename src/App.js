import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
    const expenses = [
        {  
            date: new Date(2024, 10, 12),
            title: 'New book',
            price: 30.99
        },
        { 
            date: new Date(2024, 10, 12),
            title: 'New jeans',
            price: 99.99
        }
    ];

    const saveExpenseData = (enteredExpenseData) => {
      console.log(enteredExpenseData)
    } 
    

    return (
        <div className="App">
            <NewExpense onSaveExpenseData={saveExpenseData} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
