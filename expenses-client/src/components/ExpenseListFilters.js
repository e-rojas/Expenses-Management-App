import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
const ExpenseListFilters = (props) => {
  return (
    <div className="input-group input-group-lg ">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg ">
          Filters
        </span>
      </div>

      <input
        type="text"
        value={props.filters.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseListFilters);
