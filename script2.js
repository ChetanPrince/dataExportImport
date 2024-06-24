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
let table =  document.getElementById("table2").getElementsByTagName("tbody")[0];
let rows = table.insertRow(table.length);
let keys = ["name", "surname", "email", "contact"];
keys.forEach((key, index) => {
    let td = rows.insertCell(index);
    td.innerHTML = formData[key];
});
let actionCell = newRow.insertCell(keys.length);
    actionCell.innerHTML = `<button id="edit" onClick="edit(this)">Edit</button><button id="delete" onClick="deleteRow(this)">Delete</button>`;
}

let saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", onSubmitForm);