import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 286.32,
      date: new Date(2021, 2, 12),
    },
    {
      title: "Food",
      amount: 16.32,
      date: new Date(2021, 2, 2),
    },
    {
      title: "Petrol",
      amount: 2186.32,
      date: new Date(2021, 2, 22),
    },
    {
      title: "Tax",
      amount: 2186.32,
      date: new Date(2021, 2, 19),
    },
  ]; // array of javascript objects

  const addExpenseHandler = expense => {
    console.log(expense);
    console.log('In App.js');

  }

  return (
    <div>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
