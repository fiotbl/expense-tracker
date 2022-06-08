import { useState } from 'react';
import "./ExpenseForm.css";
const ExpenseForm = (prop) => {
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
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
      // have to include other states as when you
      // update states, it does not merge old states, but replace old states with new ones
    })

    // !! use this method when you depend on the prev values:
    // setUserInput((userInput) => { return { ...userInput, enteredTitle: event.target.value } })
    console.log(userInput.enteredTitle)
  }

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    })
    console.log(userInput.enteredAmount)
  }

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    })
    console.log(userInput.enteredDate)
  }

  const submitHandler = (event) => {
    event.preventDefault(); // prevent default of request being sent and page reloading
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate) // create variables using the states
    }
    prop.onAddNewExpense(expenseData); // prop to pass data to NewExpense parent
    console.log(expenseData.title);
    console.log(expenseData.amount);
    console.log(expenseData.date);
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    })

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler} // a prop that wants a function as a value
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01" step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-01" max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
