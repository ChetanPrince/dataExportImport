const button = document.getElementById("addExpense");
let selectedRow = null;

document.addEventListener("DOMContentLoaded", loadTableData); // Load data from localStorage on page load

button.addEventListener("click", (e) => {
    e.preventDefault();
    let formData = getValues();
    if (selectedRow == null) {
        saveData(formData);
    } else {
        updateForm(formData);
    }
    clearForm();
    updateLocalStorage();
});

function saveData(formData) {
    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    let row = table.insertRow(table.length);
    let keys = ["name", "value", "type", "time"];
    keys.forEach((key, index) => {
        let td = row.insertCell(index);
        td.innerHTML = formData[key];
    });
    let actionCell = row.insertCell(keys.length);
    actionCell.innerHTML = `<button class="edit">Edit</button> <button class="delete">Delete</button>`;
}

function edit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].textContent;
    document.getElementById("value").value = selectedRow.cells[1].textContent;
    document.getElementById("type").value = selectedRow.cells[2].textContent;
    document.getElementById("time").value = selectedRow.cells[3].textContent;
}

function getValues() {
    return {
        name: document.getElementById("name").value,
        value: document.getElementById("value").value,
        type: document.getElementById("type").value,
        time: document.getElementById("time").value
    };
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("value").value = "";
    document.getElementById("type").value = "";
    document.getElementById("time").value = "";
}

function updateForm(formData) {
    selectedRow.cells[0].textContent = formData.name;
    selectedRow.cells[1].textContent = formData.value;
    selectedRow.cells[2].textContent = formData.type;
    selectedRow.cells[3].textContent = formData.time;
    selectedRow = null;
    updateLocalStorage();
}

document.querySelector('#table tbody').addEventListener('click', (e) => {
    if (e.target.classList.contains('edit')) {
        requestAnimationFrame(() => edit(e.target)); 
    } else if (e.target.classList.contains('delete')) {
        requestAnimationFrame(() => deleteRow(e.target)); 
    }
});
function deleteRow(td) {
    if (confirm("Are you sure you want to delete this data?")) {
        let row = td.parentElement.parentElement;
        row.remove();
        updateLocalStorage();
    }
}

function updateLocalStorage(){
    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    let rows = table.getElementsByTagName("tr");
    let data = [];
    for(let row of rows){
        let rowData = {
            name: row.cells[0].textContent,
            value: row.cells[1].textContent,
            type: row.cells[2].textContent,
            time: row.cells[3].textContent
        };
        data.push(rowData);
    }
    localStorage.setItem("expense", JSON.stringify(data));
}

function loadTableData(){
    let data = localStorage.getItem("expense");
    if (data) {
        data = JSON.parse(data);
        data.forEach(item =>{
            saveData(item);
        });
    }
}