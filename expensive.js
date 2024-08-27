// DOM Elements
const button = document.getElementById("addExpense");
const tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];
const filterButton = document.getElementById("filterButton");
const categoryFilter = document.getElementById("category");
let selectedRow = null;

// Event Listeners
document.addEventListener("DOMContentLoaded", initializeApp);
button.addEventListener("click", handleFormSubmit);
filterButton.addEventListener("click", filterExpenses);

// Initialize the application
function initializeApp() {
    loadTableData();
    updateTotalExpenses();
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    const formData = getFormData();
    
    if (selectedRow === null) {
        addRow(formData);
    } else {
        updateRow(formData);
    }
    
    clearForm();
    saveToLocalStorage();
    updateTotalExpenses();
}

// Add a new row to the table
function addRow(data) {
    const row = createRow(data);
    tableBody.appendChild(row);
}

// Update an existing row
function updateRow(data) {
    updateRowCells(selectedRow, data);
    selectedRow = null;
}

// Create a new table row
function createRow(data) {
    const row = document.createElement('tr');
    const keys = ["name", "value", "type", "time"];
    
    keys.forEach(key => {
        const td = document.createElement('td');
        td.textContent = data[key];
        row.appendChild(td);
    });
    
    const actionCell = document.createElement('td');
    actionCell.innerHTML = `
        <button class="edit" onClick="editRow(this)">Edit</button> 
        <button class="delete" onClick="deleteRow(this)">Delete</button>`;
    row.appendChild(actionCell);
    
    return row;
}

// Update table row cells
function updateRowCells(row, data) {
    row.cells[0].textContent = data.name;
    row.cells[1].textContent = data.value;
    row.cells[2].textContent = data.type;
    row.cells[3].textContent = data.time;
}

// Edit a row
function editRow(button) {
    selectedRow = button.parentElement.parentElement;
    const cells = selectedRow.cells;
    
    document.getElementById("name").value = cells[0].textContent;
    document.getElementById("value").value = cells[1].textContent;
    document.getElementById("type").value = cells[2].textContent;
    document.getElementById("time").value = cells[3].textContent;
}

// Delete a row
function deleteRow(button) {
    if (confirm("Are you sure you want to delete this data?")) {
        const row = button.parentElement.parentElement;
        row.remove();
        saveToLocalStorage();
        updateTotalExpenses();
    }
}

// Get form data
function getFormData() {
    return {
        name: document.getElementById("name").value,
        value: document.getElementById("value").value,
        type: document.getElementById("type").value,
        time: document.getElementById("time").value
    };
}

// Clear the form
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("value").value = "";
    document.getElementById("type").value = "";
    document.getElementById("time").value = "";
}

// Save data to localStorage
function saveToLocalStorage() {
    const data = [];
    for (const row of tableBody.rows) {
        data.push({
            name: row.cells[0].textContent,
            value: row.cells[1].textContent,
            type: row.cells[2].textContent,
            time: row.cells[3].textContent
        });
    }
    localStorage.setItem("expense", JSON.stringify(data));
}

// Load data from localStorage
function loadTableData() {
    const data = JSON.parse(localStorage.getItem("expense")) || [];
    data.forEach(item => addRow(item));
}

// Calculate and update total expenses
function updateTotalExpenses() {
    let total = 0;
    for (const row of tableBody.rows) {
        const value = parseFloat(row.cells[1].textContent);
        if (!isNaN(value)) {
            total += value;
        }
    }
    document.getElementById("totalExpenses").textContent = "Total Expenses: $" + total.toFixed(2);
}

// Filter expenses by category
function filterExpenses() {
    const selectedCategory = categoryFilter.value;
    let filteredTotal = 0;

    for (const row of tableBody.rows) {
        const value = parseFloat(row.cells[1].textContent);
        const category = row.cells[2].textContent;

        if (category === selectedCategory && !isNaN(value)) {
            filteredTotal += value;
        }
    }

    document.getElementById("filteredExpenses").textContent = `Total ${selectedCategory} Expenses: $${filteredTotal.toFixed(2)}`;
}
