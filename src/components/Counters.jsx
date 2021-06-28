import React from 'react';

import Counter from './Counter';

const Counters = ({ counters, onCountersChanged, onResetCounters }) => {
  return (
    <div>
      <button className='btn btn-success m-2' onClick={onResetCounters}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={{ id: counter.id, value: counter.value }}
          onCounterChange={onCountersChanged}
        ></Counter>
      ))}
    </div>
  );
};

export default Counters;
