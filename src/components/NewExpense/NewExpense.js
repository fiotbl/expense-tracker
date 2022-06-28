import { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"

const NewExpense = (prop) => {
  const [addExpenseClicked, setAddExpenseClicked] = useState(false)
  const setClickedTrue = () => setAddExpenseClicked(true)
  const exitAddNewExpenseHandler = () => setAddExpenseClicked(false)

  const addNewExpenseHandler = (newexpense) => {
    const expense = {
      ...newexpense,
      id: Math.random().toString()
    }
    console.log(expense);
    prop.onAddExpense(expense);
  }

  return <div className="new-expense">
    {!addExpenseClicked && <button onClick={setClickedTrue}>Add New Expense</button>}
    {addExpenseClicked && <ExpenseForm onAddNewExpense={addNewExpenseHandler} exitAddNewExpense={exitAddNewExpenseHandler}/>}
  </div>;
};

export default NewExpense;
