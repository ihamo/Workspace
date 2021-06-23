// Steps
// 1. Displays a Timer
// 2. Shows an animated border around the Timer

// Possible Implementation
// 1. Event listener to watch for a Click on "Start" button
// 2. Emit an Event stating that the timer has started
// 3. Start counting down the Timer
// 4. Emit an event that the Timer has Ticked
// 5. Each timne the counts down, update the text
// 6. If we counted down and timer reaches 0
// 7. Emit an event thaht the timer is done
// 8. Reset internal timer to get ready for another run

// Class Timer - start() - pause() - onDurationChange() - tick()
// The Timer Class has nothing todo with the animated border

class Timer {
	constructor(durationInput, startButton, pauseButton) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		this.startButton.addEventListener('click', this.start);
	}

	start() {
		console.log('Time to start the Timer!');
	}
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

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

// 3. All other cases
// 'this' is equal to whatever is to the left of the '.' in the method call
