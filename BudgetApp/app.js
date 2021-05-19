// Input Number
const amountInput = document.getElementById('number');
// Form ID
const addForm = document.getElementById('addForm');

const budgetAmount = document.getElementById('budgetAmount');
const balanceAmount = document.getElementById('balanceAmount');
const expenseForm = document.getElementById('expense-form');

function getBudgetAmount(amount) {
	// If amount  filed is empty
	if (!amount) {
		//we created a condition that checks if the user passed in an empty value or not.
		// rote umrandung
		amountInput.style.border = '1px solid #b80c09';
		amountInput.placeholder = 'input can not be empty';
		amountInput.style.color = 'b90c09';
		// nach 3 sekunden, Farbliche ausgangslage wiederherstellen
		setTimeout(() => {
			amountInput.style.color = '#495057';
			amountInput.style.border = '1px solid gray';
		}, 3000);
	} else {
		// If no error do...
		budgetAmount.innerText = amount;
		balanceAmount.innerText = amount;
		expenseForm.style.display = 'block';
		budgetform.style.display = 'none';
		editForm.style.display = 'none';
		amountInput.value = '';
	}
}

// we invoked or called the getBudgetAmount() function when we click on the submit button.
addForm.addEventListener('submit', (e) => {
	e.preventDefault();
	// Amount Input is document.getElementById('number');
	getBudgetAmount(amountInput.value);
});

//function thath display the list of expenses
const expForm = document.getElementById('expForm');
let expName = document.getElementById('expname');
let expNumber = document.getElementById('expNumber');

let id = 0;
// array with expenses
let details = [];

function addExpenses(name, number) {
	//if number or name ist empty
	if (!name.length || !number.length) {
		expName.style.border = '1px solid #b80c09';
		expName.placeholder = 'input can not be empty';
		expName.style.color = '#b80c09';

		expNumber.style.border = '1px solid #b80c09';
		expNumber.placeholder = 'input can not be empty';
		expNumber.style.color = '#b80c09';

		setTimeout(() => {
			expName.style.color = '#49507';
			expName.style.border = '1px solid gray';
			expName.placeholder = 'input can not be empty';

			expNumber.style.color = '#49507';
			expNumber.style.border = '1px solid gray';
			expNumber.placeholder = 'input can not be empty';
		}, 3000);
	} else {
		// If number and name ist not empty do the following
		// create an object and signs the id we created to the id in the object,
		// the expense name to the name in the object, and the expense amount to amount in the object.
		const userExp = {
			id: id,
			name: name,
			//converts a number that is passed as a string to a number
			number: parseInt(number)
		};
		//push the expenses in the detail array
		details.push(userExp);
		displayExp(details);
		id++;
		expName.value = '';
		expNumber.value = '';
	}
}
// Expense Button EventListener
expForm.addEventListener('submit', (e) => {
	e.preventDefault();
	addExpenses(expName.value, expNumber.value);
});

// displayExp() function that displays the expemse list after the user adds an Expense
// Parameter: Array with the Objects wich we created
function displayExp(details) {
	expValue.innerHTML = null;
	// For every entry in Details[] create a HTML Div with following settings
	for (i = 0; i < details.length; i++) {
		expValue.innerHTML += `
			<div class="expvalue" id="${details[i].id}">
				<div id="expTitlename" class="exp">
					<p>${details[i].name}</p>
				</div>
				<div id="expValueAmount" class="exp">
					<p>
						<span>$</span>${details[i].number}
					</p>
				</div>
				<div>
					<p>
						<button id="${details[id].id}" onclick="editExpDetails(${details[i].id})">
							<img src="image/trash.svg" width="15" alt="" />
						</button>
						<button id="${details[i].id}" onclick="delExpenseDetails(${details[i].id})">
							<img src="image/trash.svg" width="15" alt="" />
						</button>
					</p>
				</div>
			</div>
		`;
	}
	calcExpenses();
	displayExpenses.style.display = 'block';
}

// Calculate all Expenses
function calcExpenses() {
	let totalExp = 0;
	// loop trough expense Array and calculate Expense Cost
	for (i = 0; i < details.length; i++) {
		totalExp = details[i].number + totalExp;
	}
	expensesAmount.innerText = totalExp;
	updateBalance();
}

// Update Balance Amount
function updateBalance() {
	balanceAmount.innerText = parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
}
