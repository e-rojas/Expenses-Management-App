import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
//:::::::::::::::::::::::::::::::::::::::::::::::::::
/* const demoState = {
  expenses: [
    {
      id: 123,
      description: 'January Rent',
      note: 'Final payment for address',
      amout: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'Rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined,
  },
}; */
// ::::::::::::::::::::::ACTIONS::::::::::::::::::::::::::::::::::

//ADD_EXPENSE

//REMOVE_EXPESE

//EDIT_EXPENSE

//SET_TEXT_FILTER

//SORT_BY_DATE

//SORT_BY_AMOUNT

//SORT_BY_START_DATE

//SORT_BY_END_DATE

//:::::::::EXPENSES REDUCER
const exepensesReducerInitialState = [];
const expensesReducer = (state = exepensesReducerInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//:::::::FILTERS REDUCER
const filtersReducerInitialState = {};
const filtersReducer = (state = filtersReducerInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//:::::::STORE
const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);
console.log(store.getState());
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
