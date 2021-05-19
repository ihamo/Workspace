// Alle Variablen deklarieren

const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const todo = document.getElementById('todo');
// empty Todo List
let todoList = [];

// EventListener for adding a Todo Task
form.addEventListener('submit', (e) => {
	// The e.preventDefault prevents the page from reloading when the user click enter
	e.preventDefault();
	addTodo();
});

function addTodo() {
	// Get input
	const newTodo = input.value;
	// Check if input is empty
	if (!newTodo) {
		return;
	} else {
		todoList.push({
			text: newTodo,
			completed: false
		});
	}

	// add the todo to localstorage
	// We store the array in the localStorage so that we can still access the value anytime.
	localStorage.setItem('todos', JSON.stringify(todoList));
	// render todo list
	render();
}

function render() {
	// clear the list
	todo.innerHTML = null;

	// get the todo list from localstorage
	const todos = localStorage.getItem('todos');
	todoList = JSON.parse(todos) || [];

	for (let i = 0; i < todoList.length; i++) {
		const item = document.createElement('li');

		// create checkbox to update completed state
		const checkbox = document.createElement('input');

		checkbox.type = 'checkbox';

		checkbox.addEventListener('click', function(e) {
			todoList[i].completed = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todoList));

			// check if todo item is completed and add appropriate class
			if (todoList[i].completed) {
				item.classList.add('completed');
				item.classList.remove('uncompleted');
				checkbox.checked = todoList[i].completed;
			} else {
				item.classList.add('uncompleted');
				item.classList.remove('completed');
				checkbox.checked = todoList[i].completed;
			}
		});
	}
}

// create text node
const text = document.createElement('p');
text.innerText = todoList[i].text;

// create delete button
const button = document.createElement('button');
button.innerText = 'X';
button.addEventListener('click', function() {
	todoList.splice(i, 1);
	localStorage.setItem('todos', JSON.stringify(todoList));
	render();
});

item.appendChild(checkbox);
item.appendChild(text);
item.appendChild(button);
todo.appendChild(item);
input.value = null;
