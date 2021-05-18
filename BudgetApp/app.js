const amountInput = document.getElementById('number');
const addForm = document.getElementById('addForm');

const budgetAmount = document.getElementById('budgetAmount');
const balanceAmount = document.getElementById('balanceAmount');

function getBudgetAmount(amount) {
	// Falls amount nicht vorhanden
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
		//Falls eine Zahl eingegeben wurde, führe folgenden Code aus
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
	getBudgetAmount(amountInput.value);
});
