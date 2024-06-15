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
    // resetForm();
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
    actionCell.innerHTML = `<button id="edit" onClick="edit(this)">Edit</button><button id="delRow" onClick="deleteRow()">Delete</button>`;
}

const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", onFormSubmit);