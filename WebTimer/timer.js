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
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		this.started = false;
		// check if callback is passed otherwise an error will occur
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		// this.timeLeft = 30;

		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	// Timer count down

	start = () => {
		// if we click start, the start function waits 1000ms to start, because we set
		// the intervall to 1000ms, to start immediately, we have to call tick the first time without to wait
		// check if onStart() function was passed as an callback
		if (this.onStart) {
			this.onStart(this.timeRemaining);
		}
		if (!this.started) {
			this.tick();
			this.interval = setInterval(this.tick, 50);
		}
		this.started = true;
	};

	tick = () => {
		// this.timeLeft = this.timeLeft -1;
		// this.durationInput.value = this.timeleft;
		if (this.timeRemaining <= 0) {
			this.pause();
			// check if callback is passed, if so called it
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 0.05;
			// check if callback is passed, if so called it
			if (this.onTick) {
				this.onTick(this.timeRemaining);
			}
		}
	};

	pause = () => {
		clearInterval(this.interval);
		this.started = false;
	};

	// getter & Setter to update and storing data in the DOM
	// Get the Time
	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	// Set the Time
	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}

	// alternative Solution
	// this.startButton.addEventListener('click', this.start.bind(this));
}
