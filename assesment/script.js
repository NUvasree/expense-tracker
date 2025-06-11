
let expenses = [];

const titleInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');
const addBtn = document.getElementById('addBtn');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');

addBtn.addEventListener('click', () => {
  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value;

  if (!title || isNaN(amount) || !date) {
    alert('Please fill out all fields correctly.');
    return;
  }

  const expense = {
    id: Date.now(),
    title,
    amount,
    date
  };

  expenses.push(expense);
  renderExpenses();
  clearInputs();
});

function renderExpenses() {
  expenseList.innerHTML = '';
  let total = 0;

  expenses.forEach(exp => {
    total += exp.amount;

    const expenseItem = document.createElement('div');
    expenseItem.className = 'expense-card';

    expenseItem.innerHTML = `
      <span><strong>${exp.title}</strong></span>
      <span>₹${exp.amount.toFixed(2)}</span>
      <span>${new Date(exp.date).toLocaleDateString()}</span>
      <button class="delete-btn" onclick="deleteExpense(${exp.id})">Delete</button>
    `;

    expenseList.appendChild(expenseItem);
  });

  totalAmount.textContent = total.toFixed(2);
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  renderExpenses();
}

function clearInputs() {
  titleInput.value = '';
  amountInput.value = '';
  dateInput.value = '';
}
