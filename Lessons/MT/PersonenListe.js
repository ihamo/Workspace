//Input Felder Für Personenangaben
// Form ID
const personenForm = document.getElementById('Personform');
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

// prototype Function addPerson()
Person.prototype.addPerson = function() {
	const name = this.name;
	const age = this.age;
	const adress = this.adress;
	let id = this.id;
	id++;

	return Persons.push({ name, age, adress, id });
};

// Function addPerson()
const addPerson = function(name, age, adress) {
	id++;
	return Persons.push({ name, age, adress, id });
};

// TODO !!
Person.prototype.addToDoc = function() {};

function addExpenses(name, age, adress) {
	//if number or name ist empty
	if (!name.length || !age.length || !adress.length) {
		personenName.style.border = '1px solid #b80c09';
		personenName.placeholder = 'input can not be empty';
		personenName.style.color = '#b80c09';

		personenAlter.style.border = '1px solid #b80c09';
		personenAlter.placeholder = 'input can not be empty';
		personenAlter.style.color = '#b80c09';

		personenLocation.style.border = '1px solid #b80c09';
		personenLocation.placeholder = 'input can not be empty';
		personenLocation.style.color = '#b80c09';

		setTimeout(() => {
			personenName.style.color = '#49507';
			personenName.style.border = '1px solid gray';
			personenName.placeholder = 'input can not be empty';

			personenAlter.style.color = '#49507';
			personenAlter.style.border = '1px solid gray';
			personenAlter.placeholder = 'input can not be empty';

			personenLocation.style.color = '#49507';
			personenLocation.style.border = '1px solid gray';
			personenLocation.placeholder = 'input can not be empty';
		}, 3000);
	} else {
		// If number and name ist not empty do the following
		// create an object and signs the id we created to the id in the object,
		// the expense name to the name in the object, and the expense amount to amount in the object.
		const Persona = {
			name: name,
			//converts a number that is passed as a string to a number
			age: parseInt(age),
			adress: adress,
			id: id
		};
		//push the expenses in the detail array
		Persons.push(Persona);
		id++;
		personenName.value = '';
		personenAlter.value = '';
		personenLocation.value = '';
	}
}

// Submit Button EventListener
personenForm.addEventListener('submit', (e) => {
	e.preventDefault();
	addExpenses(personenName.value, personenAlter.value, personenLocation.value);
});

// Juan.addPerson();
// Ali.addPerson();
// Heike.addPerson();
console.log(Persons);
