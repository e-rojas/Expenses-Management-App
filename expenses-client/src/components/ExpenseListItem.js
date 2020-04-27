import React from 'react';

export default function ExpenseListItem({ description, amount, createdAt }) {
  return (
    <>
      <li>
        <h4>{description}</h4>
        <p>
          {' '}
          {amount} -- {createdAt}
        </p>
      </li>
    </>
  );
}
