import React from 'react';
import ExpensesList from '../components/ExpensesLIst';
export default function ExpensesDashboard() {
  return (
    <div className="container-fluid alert-info p-4 FH  ">
      <div>This is from my dashboard component</div>
      <ExpensesList />
    </div>
  );
}
