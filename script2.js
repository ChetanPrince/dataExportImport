let selectedRow = null;
function onSubmitForm(event){
    event.preventDefault();
    let formData = getData();
    if(selectedRow == null){
        saveData(formData);
    }
    else{
        updateData(formData);
    }
    resetData();
}

function getData(){
    return{
        name : document.getElementById("name-input").value,
        surname : document.getElementById("surname-input").value,
        email:document.getElementById("email-input").value,
        contact: document.getElementById("contact-input").value
    };
}
function saveData(formData){
let table = document.getElementById("table2").getElementsByTagName("tbody")[0];
let newRow = table.insertRow(table.length);
let keys = ["name", "surname", "email", "contact"];
keys.forEach((key, index) => {
    let cell = newRow.insertCell(newRow.length);
    cell.innerHTML = formData[key];
});
let actionCell = newRow.insertCell(newRow.length);
actionCell.innerHTML = `<button id="edit" onClick="edit(this)">Edit</button><button id ="delete" onClick="deleteRow(this)">Delete</button>`;
}

function resetData(formData){
        document.getElementById("name-input").value ="";
        document.getElementById("surname-input").value = "";
        document.getElementById("email-input").value ="";
        document.getElementById("contact-input").value = "";
}

function edit(td){
selectedRow = td.parentElement.parentElement;
        document.getElementById("name-input").value = selectedRow.cells[0].innerHTML;
        document.getElementById("surname-input").value = selectedRow.cells[1].innerHTML;
        document.getElementById("email-input").value =selectedRow.cells[2].innerHTML;
        document.getElementById("contact-input").value = selectedRow.cells[3].innerHTML;
}

function deleteRow(td){
    if(confirm("Are you sure you want to delete this record")){
        row = td.parentElement.parentElement;
        document.getElementById("table2").deleteRow(row.rowIndex);
        resetForm();
    }
}
function updateData(formData){
       selectedRow.cells[0].innerHTML = formData["name"];
       selectedRow.cells[1].innerHTML = formData["surname"];
       selectedRow.cells[2].innerHTML = formData["email"];
       selectedRow.cells[3].innerHTML = formData["contact"];
       selectedRow = null;
}




let saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", onSubmitForm);