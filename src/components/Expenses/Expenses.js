import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

const Expense = (props) => {
  const [year, setYear] = useState('2021')

  const onYearSelectHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log("expenses.js")
    console.log(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearSelect={onYearSelectHandler} />
        {props.expenses.map((expense) =>
        (<ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date} 
          />))}

      </Card>
    </div>
  );
}

export default Expense;
