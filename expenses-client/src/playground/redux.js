import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// import axios from 'axios';
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
// ::::::::::::::::::::::ACTIONS GENERATOR ::::::::::::::::::::::::::::::::::
//ADD_BLOGS
/* const fetchBlogs = (payload) => {
  return { type: 'FETCH_BLOGS', payload };
}; */
//ADD_EXPENSE the object is destructuring the object provided.
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    payload: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt,
    },
  };
};

//REMOVE_EXPESE
const removeExpense = ({ id } = {}) => {
  return { type: 'REMOVE_EXPENSE', id };
};

//EDIT_EXPENSE
const editExpense = (id, updates) => {
  return { type: 'UPDATE_EXPENSE', id, updates };
};

//SET_TEXT_FILTER
const setTextFilter = (text = '') => {
  return { type: 'SET_TEXT_FILTER', text };
};

//SORT_BY_DATE
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE',
  };
};

//SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT',
  };
};

//SET_START_DATE
const setStartDate = (startDate) => {
  return { type: 'SET_START_DATE', startDate };
};

//SET_END_DATE
const setEndDate = (endDate) => {
  return { type: 'SET_END_DATE', endDate };
};

//:::::::::EXPENSES REDUCER
const exepensesReducerInitialState = [];
const expensesReducer = (state = exepensesReducerInitialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id);
    case 'UPDATE_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        }
      });
    default:
      return state;
  }
};
//:::::::FILTERS REDUCER
const filtersReducerInitialState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerInitialState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};
//::::::::::::BLOG REDUCER
const blogInitialState = [];
const blogReducer = (state = blogInitialState, action) => {
  switch (action.type) {
    case 'FETCH_BLOGS':
      return [...state, action.payload.id];
    default:
      return state;
  }
};
//:::::::STORE
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    blog: blogReducer,
  })
);
//::::::GET VISIBLE EXPENSES FILTERING SYSTEM
/* const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch =
      typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch =
      typeof startDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = true;
    return startDateMatch && endDateMatch && textMatch;
  });
}; */
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
//:::::store.subscribe everytime there's changes we get notified
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
//::::::::::::::::store dispatch
const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseONe.payload.id }));
// store.dispatch(
//   editExpense(expenseTwo.payload.id, {
//     note: 'Tim Hortons',
//     description: 'Cafe Latte',
//   })
// );
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));

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
