import Expense from "./components/Expenses/Expenses";

function App() {
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

  return (
    <div>
      <h2>Lets get started!</h2>
      <div>
        <Expense expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
