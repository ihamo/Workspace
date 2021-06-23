
// 3 ways to determining the value of this

// 1. Did you define the function with an arrow function
// Write 'console.log(this)' on tzhe first valid line above the arrowfunction.
// Value of 'this' in the arrow function will be equal to that console log

const colors = {
	printColor() {
		console.log(this);
		const printThis = () => {
			console.log(this);
		};
		printThis();
	}
};

colors.printColor();

// 2. Did you call 'bind', 'call' or 'apply' on the function when you invoked it ?
// 'this' is equal to the first argumenten of 'bind', 'equal' or 'apply'

const printThis = function() {
	console.log(this);
};

// This will be overwritten with the first argument with .call(), .bind() or .apply()
// this will be {color: 'red'}
printThis.call({ color: 'red' });

// 3. All other cases
// 'this' is equal to whatever is to the left of the '.' in the method call

const colors = {
	printColors() {
		console.log(this);
	}
};

// this will be the left object of .printColor() -> colors instanze
colors.printColor();

const randomObject = {
	a: 1
};

randomObject.printColor = colors.printColor;

// this will be the left object of .printColor() -> randomObject instanze
randomObject.printColor();
