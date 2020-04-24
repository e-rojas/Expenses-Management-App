import React from 'react';
import { connect } from 'react-redux';

const ExpensesLIst = (props) => {
  return (
    <div>
      <h1>Expenses List</h1>
      {props.name}
      {props.expenses.length}
    </div>
  );
};
export default connect((state) => {
  return { name: 'Edgar', expenses: state.expenses };
})(ExpensesLIst);

/* const ConnectedExpenseList = connect((state) => {
  return { name: 'Edgar', expenses: state.expenses };
})(ExpensesLIst);

export default ConnectedExpenseList; */
