import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

export const ExpensesList = (props) => {
    if (props.expenses.length === 0){
        return <h2 className="expenses-list_fallback">Found no expenses.</h2>
    }

    return <ul className="expenses-list">
        {props.expenses.map((expense) =>
        (<ExpenseItem
            key={expense.id} // key is a prop that can be added to ANY component (custom or built in)
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />))}
    </ul>
}

export default ExpensesList;