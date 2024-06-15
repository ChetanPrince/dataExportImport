let selectedRow = null;

function onFormSubmit(e){
    e.preventDefault();
    let formData = getData();
    if(selectedRow == null){
        saveData(formData);
    }
    else{
        updateForm(formData);
    }
    resetForm();
}


function getData(){
    return{
        name: document.getElementById("name-input").value,
        surname: document.getElementById("surname-input").value,
        email: document.getElementById("email-input").value,
        contact: document.getElementById("contact-input").value
        };
        }

function saveData(formData){
    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    let row = table.insertRow(table.length);
    let keys = ["name", "surname", "email", "contact"];
    keys.forEach((key, index)=>{
       let td = row.insertCell(index);
       td.innerHTML = formData[key];
    });
    let actionCell = row.insertCell(keys.length);
    actionCell.innerHTML = `<button onClick="edit(this)">Edit</button><button onClick="deleteRow()">Delete</button>`;
}
function resetForm(){
    document.getElementById("name-input").value = "";
    document.getElementById("surname-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("contact-input").value = "";

}

function edit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name-input").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname-input").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email-input").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact-input").value = selectedRow.cells[3].innerHTML;
}

function updateForm(formData){
    selectedRow.cells[0].innerHTML = formData["name"];
    selectedRow.cells[1].innerHTML = formData["surname"];
    selectedRow.cells[2].innerHTML = formData["email"];
    selectedRow.cells[3].innerHTML = formData["contact"];
    selectedRow = null;
}


const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", onFormSubmit);