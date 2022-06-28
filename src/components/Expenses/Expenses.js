import { useState } from 'react';
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'

const Expense = (props) => {
  const [year, setYear] = useState('2021')

  const onYearSelectHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === year // if true, item added to filteredExpenses
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearSelect={onYearSelectHandler} />
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expense;
