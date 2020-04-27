import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from '../components/ExpenseListItem';
import selectExpenses from '../selectors/expenses.js';
import ExpensesListFilters from '../components/ExpenseListFilters';
const ExpensesLIst = (props) => {
  return (
    <div>
      <h1>Expenses List</h1>
      <ExpensesListFilters />

      {props.expenses.map((expense) => (
        <ExpensesListItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    name: 'Edgar',
    expenses: selectExpenses(state.expenses, state.filters),
  };
};
export default connect(mapStateToProps)(ExpensesLIst);
/* export default connect((state) => {
  return { name: 'Edgar', expenses: state.expenses, filters: state.filters };
})(ExpensesLIst);
 */
/* const ConnectedExpenseList = connect((state) => {
  return { name: 'Edgar', expenses: state.expenses };
})(ExpensesLIst);

export default ConnectedExpenseList; */
