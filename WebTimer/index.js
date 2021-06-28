const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

// Set Circle Attributes
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart() {
		console.log('Timer has started');
	},
	onTick() {
		currentOffset = currentOffset - 50;
		circle.setAttribute('stroke-dashoffset', currentOffset);
	},
	onComplete() {
		console.log('Timer is Complete');
	}
});
