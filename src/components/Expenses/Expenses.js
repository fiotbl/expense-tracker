import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

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
        {filteredExpenses.map((expense) =>
        (<ExpenseItem
          key={expense.id} // key is a prop that can be added to ANY component (custom or built in)
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))}

      </Card>
    </div>
  );
}

export default Expense;
