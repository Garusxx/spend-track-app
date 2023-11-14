import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [filtredYear, setFilteredYear] = useState("2020");

  const expenseFilterHendler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filtredExpenses = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === filtredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filtredYear}
          onExpenseFilter={expenseFilterHendler}
        />
        <ExpensesChart expenses={filtredExpenses}/>
        {filtredExpenses.length === 0 ? (
          <p className='expenses-list__fallback'>No expenses found.</p>
        ) : (
          filtredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
