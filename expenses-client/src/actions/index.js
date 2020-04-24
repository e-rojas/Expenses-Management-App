import uuid from 'uuid';

//ADD_EXPENSE the object is destructuring the object provided.
export const addExpense = ({
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
export const removeExpense = ({ id } = {}) => {
  return { type: 'REMOVE_EXPENSE', id };
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return { type: 'UPDATE_EXPENSE', id, updates };
};

//SET_TEXT_FILTER
export const setTextFilter = (text = '') => {
  return { type: 'SET_TEXT_FILTER', text };
};

//SORT_BY_DATE
export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE',
  };
};

//SORT_BY_AMOUNT
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT',
  };
};

//SET_START_DATE
export const setStartDate = (startDate) => {
  return { type: 'SET_START_DATE', startDate };
};

//SET_END_DATE
export const setEndDate = (endDate) => {
  return { type: 'SET_END_DATE', endDate };
};
