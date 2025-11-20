
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income-amount");
const expenseEl = document.getElementById("expense-amount");
const listEl = document.getElementById("transaction-list");

const form = document.getElementById("transaction-form");
const descInput = document.getElementById("description");
const amountInput = document.getElementById("amount");

//   Load stored transactions  

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

//   Update UI  

function updateValues() {
    let income = 0;
    let expense = 0;
    let total = 0;

    transactions.forEach(t => {
        if (t.amount > 0) {
            income += t.amount;
        } else {
            expense += t.amount;
        }
        total += t.amount;
    });

    balanceEl.textContent = `${total.toFixed(2)}€`;
    incomeEl.textContent = `${income.toFixed(2)}€`;
    expenseEl.textContent = `${expense.toFixed(2)}€`;
}

function renderList() {
    listEl.innerHTML = "";

    transactions.forEach(t => {
        const li = document.createElement("li");
        li.classList.add(t.amount > 0 ? "income" : "expense");

        li.innerHTML = `
            ${t.description}
            <span>${t.amount.toFixed(2)}€</span>
        `;

        listEl.appendChild(li);
    });
}

//   Add Transaction

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const description = descInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (description === "" || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const newTransaction = {
        id: Date.now(),
        description,
        amount
    };

    transactions.push(newTransaction);

    localStorage.setItem("transactions", JSON.stringify(transactions));

    renderList();
    updateValues();

    descInput.value = "";
    amountInput.value = "";
});

//   Initial Load  

renderList();
updateValues();
