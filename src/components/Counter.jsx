import React from 'react';

const Counter = ({ counter, onCounterChange }) => {
  const { value, id } = counter;
  const formattedValue = value === 0 ? 'Zero' : value;
  const valueClasses = `alert m-2 p-1 alert-${
    value === 0 ? 'warning' : 'primary'
  }`;
  return (
    <div>
      <span className={valueClasses}>{formattedValue}</span>
      <button
        className='btn btn-secondary btn-sm'
        onClick={() => onCounterChange('add', id)}
      >
        +
      </button>
      <button
        className='btn btn-secondary btn-sm m-1'
        onClick={() => onCounterChange('subtract', id)}
        disabled={value === 0}
      >
        -
      </button>
      <button
        className='btn btn-danger btn-sm'
        onClick={() => onCounterChange('delete', id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
