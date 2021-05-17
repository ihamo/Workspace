var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 300 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement('style');
	css.type = 'text/css';
	css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #fc0 }';
	document.body.appendChild(css);
};

// BUTTON

var i = 0;
var txt =
	'Von nun an sind die Ideen klar. Es ist Zeit, nach Lösungen zu suchen und Ziele näher zu bringen. Prototyp, schreiben und formen, damit das Design Ihre persönliche Note überträgt.';
var speed = 50;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById('button_text').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
	const deleteBtn = document.getElementById('textBtn');
	deleteBtn.classList.add('hideButton');
}

// Parallax effekt

const bg = document.getElementById('parallax');
const astronaut = document.getElementById('astroBoy');

window.addEventListener('scroll', function() {
	let value = window.scrollY;
	bg.style.top = value * 0.5 + 'px';
	//astronaut.style.top = value * 0.8 + 'px';
});

// 3D Karten Effekt

const cards = document.querySelector('.cards');
const images = document.querySelectorAll('.card__img');
const backgrounds = document.querySelectorAll('.card__bg');
const range = 40;

// const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1); // thanks @alice-mx

let timeout;
document.addEventListener(
	'mousemove',
	({ x, y }) => {
		if (timeout) {
			window.cancelAnimationFrame(timeout);
		}

		timeout = window.requestAnimationFrame(() => {
			const yValue = calcValue(y, window.innerHeight);
			const xValue = calcValue(x, window.innerWidth);

			cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

			[].forEach.call(images, (image) => {
				image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
			});

			[].forEach.call(backgrounds, (background) => {
				background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
			});
		});
	},
	false
);

function stars() {
	let count = 20;
	let scene = document.querySelector('.scene');
	let i = 0;

	while (i < count) {
		let star = document.createElement('i');
		let x = Math.floor(Math.random() * window.innerWidth);

		let duration = Math.random() * 1;
		let h = Math.random() * 100;

		star.style.left = x + 'px';
		star.style.width = 1 + 'px';
		star.style.height = 50 + h + 'px';
		star.style.animationDuration = duration + 's';

		scene.appendChild(star);
		i++;
	}
}

stars();
