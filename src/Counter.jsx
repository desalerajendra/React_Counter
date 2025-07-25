import React, { useState } from 'react'; // Import React and the useState Hook

function Counter() {
  const [count, setCount] = useState(0); // Initialize count state to 0

  // Function to increment the count
  const increment = () => {
    setCount(count + 1); // Update the count by adding 1
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1); // Decrease the count by 1
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className='counter-container'>
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p> {/* Display the current count */}
      <button onClick={increment}>Increment</button> {/* Increment button */}
      <button onClick={decrement}>Decrement</button> {/* Decrement button */}
      <button onClick={reset}>Reset</button>
    </div>
  );
}


export default Counter; // Export the Counter component