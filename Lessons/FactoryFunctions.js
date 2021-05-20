// add Method "grumpus" to String Objects
String.prototype.grumpus = () => {
	console.log('Go away');
};

//Example how to use grumpus after declaration
const RandomString = 'Random String';
RandomString.grumpus();

String.prototype.yell = function() {
	return `OMG !! ${this.toUpperCase()} !!!`;
};

// Factory Functions
// A factory function is any function which is
// not a class or constructor that returns a (presumably new) object.
function rgb(r, g, b) {
	return `rgb:(${r} + ${g} + ${b})`;
}

function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `return rgb:(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	};
	return color;
}

const firstColor = makeColor(100, 200, 300);

// Factory Function Example
// factory functions simply set up and
// Return the new object when you call the function.
const personFactory = (name, age) => {
	const sayHello = () => {
		console.log('hello');
	};
	//return new Object
	return { name, age, sayHello };
};

const jeff = personFactory('Jeff', 25);
console.log(jeff.name); //jeff
jeff.sayHello(); //calls the function and logs Hello

// Same function using a Constructor pattern

const Person = function(name, age) {
	this.sayHello = () => {
		console.log('hello!');
	};
	this.name = name;
	this.age = age;
};

const Juan = new Person('Juan', 27);
Juan.sayHello();

/*-------------------------------------------------*/

const AnimalFactory = (Animal, age) => {
	const animalSound = () => {
		console.log('töröööö');
	};
	const animalCount = () => {
		console.log(age);
	};
	return { Animal, age, animalSound, animalCount };
};

const Lion = AnimalFactory('Lion', 27);

Lion.animalCount();

/* Create User Factory Function*/

const createUser = ({ userName, avatar }) => ({
	userName,
	avatar,
	setUserName(userName) {
		this.userName = userName;
		return this;
	}
});

console.log(createUser({ userName: 'echo', avatar: 'echo.png' }));

/*-------------------------------------------------------------------*/

const GName = 'Maynard';
const color = 'red';
const number = 34;
const food = 'rice';

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(GName, color, number, food); // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({ GName, color, number, food });
// { name: 'Maynard', color: 'red', number: 34, food: 'rice' }
