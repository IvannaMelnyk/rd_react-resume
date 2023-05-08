import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter'>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Збільшити</button>
      <button onClick={decrement}>Зменшити</button>
    </div>
  );
};

export default Counter;
