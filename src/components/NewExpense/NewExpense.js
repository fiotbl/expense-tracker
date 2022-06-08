import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"

const NewExpense = (prop) => {
  const addNewExpenseHandler = (newexpense) => {
    const expense = {
      ...newexpense,
      id: Math.random().toString()
    }
    console.log(expense);
    prop.onAddExpense(expense);
  }

  return <div className="new-expense">
      <ExpenseForm onAddNewExpense={addNewExpenseHandler}/>
  </div>;
};

export default NewExpense;
