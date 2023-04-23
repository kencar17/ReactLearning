import { useState } from "react";

import "./Expense.css";
import Card from "../../UI/Card/Card";

import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expense;
