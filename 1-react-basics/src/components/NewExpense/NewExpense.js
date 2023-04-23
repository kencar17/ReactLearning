import { useState } from "react";

import ExpenseForm from "./ExpenseForm/ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let formAdding = <button onClick={startEditingHandler}>Add New Expense</button>;

  if (isEditing) {
    formAdding = <ExpenseForm
        onSaveExepnseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
    />
  }

  return (
    <div className="new-expense">
      {formAdding}
    </div>
  );
};

export default NewExpense;
