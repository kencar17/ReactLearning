import { useState } from 'react'

import Expense from "./components/Expenses/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 6, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];


const App = () => {
  
  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpenseHandler = expense => {
    console.log(expense)
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
