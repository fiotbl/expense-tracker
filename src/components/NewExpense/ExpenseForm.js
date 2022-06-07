import { useState } from 'react';
import "./ExpenseForm.css";
const ExpenseForm = () => {
  // option 1: individual states 
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // option 2: combine states into one object
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      enteredTitle: event.target.value,
      enteredAmount: '',
      enteredDate: ''
      // have to include other states as when you
      // update states, it does not merge old states, but replace old states with new ones
    })
    console.log(enteredTitle)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    console.log(enteredAmount)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    console.log(enteredDate)
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
