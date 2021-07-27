import React, { useState } from 'react';

function App() {
	// The first element in the array is the current State
	// The second element is the function that update that current state
	const [ count, setCount ] = useState(4);

	function decrementCount() {
		setCount(count - 1);
	}

	function incrementCount() {
		setCount(count + 1);
	}

	return (
		<div>
			<button onClick={decrementCount}>-</button>
			<span> {count} </span>
			<button onClick={incrementCount}>+</button>
		</div>
	);
}

export default App;

// Hooks
// Hooks can only be used in Functions
// React must be called in the exact same order in every component render
