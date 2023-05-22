import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const MAX_VALUE = 10;

  const increment = () => {
    if (count < MAX_VALUE) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment} disabled={count === MAX_VALUE}>
        Increment
      </button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
