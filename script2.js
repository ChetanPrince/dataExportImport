let selectedRow = null;
function onSubmitForm(e){
    e.preventDefault();
    let formData = getData();
    if(selectedRow === null){
        saveData(formData);
            }
            else{
                updateForm(formData);            }
                resetForm();}
    
function getData(){
    return{
        name: document.getElementById("name-input").value,
        surname: document.getElementById("surname-input").value,
        email: document.getElementById("email-input").value,
        contact: document.getElementById("contact-input").value
    };
}
function saveData(formData){
    let table = document.getElementById("table2").getElementsByTagName("tbody")[0];
    let rows = table.insertRow();
    let keys = ["name", "surname", "email", "contact"];
    keys.forEach(key =>{
        let cells = rows.insertCell(rows.length);
        cells.innerHTML = formData[key];
    });
    let actionCell = rows.insertCell(rows.cells.length);
    actionCell.innerHTML = `<button id="edit" onClick="edit(this)">Edit</button><button id="delete" onClick="delete(this)">Delete</button>`
}
function resetForm(formData){
    document.getElementById("name-input").value ="";
    document.getElementById("surname-input").value ="";
    document.getElementById("email-input").value ="";
    document.getElementById("contact-input").value ="";
}

function edit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name-input").value =selectedRow.cells[0].innerHTML;
    document.getElementById("surname-input").value =selectedRow.cells[1].innerHTML;
    document.getElementById("email-input").value =selectedRow.cells[2].innerHTML;
    document.getElementById("contact-input").value =selectedRow.cells[3].innerHTML;
}
function updateForm(formData){
    selectedRow.cells[0].innerHTML = document.getElementById("name-input").value;
    selectedRow.cells[1].innerHTML = document.getElementById("surname-input").value;
    selectedRow.cells[2].innerHTML = document.getElementById("email-input").value;
    selectedRow.cells[3].innerHTML = document.getElementById("contact-input").value;
    selectedRow =null;
}


const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", onSubmitForm);