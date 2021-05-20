//Input Felder Für Personenangaben
// Form ID
const personForm = document.getElementById('Personform');
// Input Number
const personenName = document.getElementById('Name');
const personenAlter = document.getElementById('Alter');
const personenLocation = document.getElementById('Location');
// Ausgabe DIV
const renderPerson = document.createElement('PersonListe');

let id = 0;
// Personen Array
const Persons = [];
// Personen Konstruktor
class Person {
	constructor(name, age, adress) {
		this.name = name;
		this.age = age;
		this.adress = adress;
		this.id = id;
		id++;
		return Persons.push({ name, age, adress, id });
	}
}

// New Person
const Juan = new Person('Juan', 27, 'Sömmering Str7, 50823 Köln');
const Ali = new Person('Ali', 30, 'Kirchfeld straße 3, 51643 Gummersbach');
const Heike = new Person('Heike', 30, 'Gustavstraße 6, 50823 Köln');
const Elli = new Person('Elli', 31, 'Pivitsheider Straße 73, 32832 Augustdorf');

// function addPerson()
Person.prototype.addPerson = function() {
	const name = this.name;
	const age = this.age;
	const adress = this.adress;
	let id = this.id;
	id++;

	return Persons.push({ name, age, adress, id });
};
// TODO !!
Person.prototype.addToDoc = function() {};

function addExpenses(name, age, adress) {
	//if number or name ist empty
	if (!name.length || !number.length) {
		personName.style.border = '1px solid #b80c09';
		personName.placeholder = 'input can not be empty';
		personName.style.color = '#b80c09';

		personAlter.style.border = '1px solid #b80c09';
		personAlter.placeholder = 'input can not be empty';
		personAlter.style.color = '#b80c09';

		personAdresse.style.border = '1px solid #b80c09';
		personAdresse.placeholder = 'input can not be empty';
		personAdresse.style.color = '#b80c09';

		setTimeout(() => {
			personName.style.color = '#49507';
			personName.style.border = '1px solid gray';
			personName.placeholder = 'input can not be empty';

			personAlter.style.color = '#49507';
			personAlter.style.border = '1px solid gray';
			personAlter.placeholder = 'input can not be empty';

			personAdresse.style.color = '#49507';
			personAdresse.style.border = '1px solid gray';
			personAdresse.placeholder = 'input can not be empty';
		}, 3000);
	} else {
		// If number and name ist not empty do the following
		// create an object and signs the id we created to the id in the object,
		// the expense name to the name in the object, and the expense amount to amount in the object.
		const Persona = {
			id: id,
			name: name,
			//converts a number that is passed as a string to a number
			age: parseInt(age),
			adress: adress
		};
		//push the expenses in the detail array
		details.push(Persona);
		id++;
		expName.value = '';
		expNumber.value = '';
	}
}

// Juan.addPerson();
// Ali.addPerson();
// Heike.addPerson();
console.log(Persons);
