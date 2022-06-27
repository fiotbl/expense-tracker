import { useState } from 'react';
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_LIST = [
  {
    id: 'e1',
    title: "Car Insurance",
    amount: 286.32,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e2',
    title: "Food",
    amount: 16.32,
    date: new Date(2021, 2, 2),
  },
  {
    id: 'e3',
    title: "Petrol",
    amount: 2186.32,
    date: new Date(2021, 2, 22),
  },
  {
    id: 'e4',
    title: "Tax",
    amount: 2186.32,
    date: new Date(2021, 2, 19),
  },
]; // array of javascript objects

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_LIST)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
    console.log(expenses)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
