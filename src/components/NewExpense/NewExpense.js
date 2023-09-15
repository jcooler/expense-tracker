import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = function (props) {
const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = function (enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };



const startEditingHandler = function () {
  setIsEditing(true);
};

const stopEditingHandler = function () {
  setIsEditing(false);
};

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add a new expense</button>}
      {isEditing && (
      <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler}
      />
    )}
    </div>
  );
};

export default NewExpense;
