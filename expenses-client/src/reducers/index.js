import { combineReducers } from 'redux';
import expensesReducer from './expensesReducer';
import filtersReducer from './filtersReducer';
//         :::COMBINED REDUCERS :::

const allReducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
});

export default allReducers;
