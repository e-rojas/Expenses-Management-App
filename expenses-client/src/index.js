import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppRouter from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.dispatch(
  addExpense({ description: 'Water bill', amount: 300, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: 'Gas bill', amount: 5000, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: 'Coffee', amount: 300, createdAt: 3000 })
);
store.dispatch(
  addExpense({ description: 'Coffee', amount: 400, createdAt: 4000 })
);
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('Coffee'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
