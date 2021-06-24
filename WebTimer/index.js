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
		this.pauseButton.addEventListener('click', this.pause);
	}

	// Timer count down
	start = () => {
		// if we click start, the start function waits 1000ms to start, because we set
		// the intervall to 1000ms, to start immediately, we have to call tick the first time without to wait
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
		} else {
			this.timeRemaining = this.timeRemaining - 1;
		}
	};

	pause = () => {
		clearInterval(this.interval);
	};

	// getter & Setter to update and storing data in the DOM

	// Get the Time
	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	// Set the Time
	set timeRemaining(time) {
		this.durationInput.value = time;
	}

	// alternative Solution
	// this.startButton.addEventListener('click', this.start.bind(this));
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
