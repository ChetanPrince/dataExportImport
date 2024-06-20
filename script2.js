let selectedValue = null;

function submitForm(e){
    e.preventDefault();
    let formData = getData();
    if(selectedValue == null){
        saveData(formData);
    }
    else{
        updateForm(formData);
    }
    resetForm();
}

function getData(){
    return{firstName: document.getElementById("name-input").value,
    surname: document.getElementById("surname-input").value,
    email: document.getElementById("email-input").value,
    contact: document.getElementById("contact-input").value}
}

function saveData(formData){
    const table = document.getElementById("table2").getElementsByTagName("tbody")[0];
    const row = table.insertRow(table.length);
    let keys = ["firstName", "surname", "email", "contact"];
    keys.forEach((key, index)=>{
        let td = row.insertCell(index);
        td.innerHTML = formData[key];
    });
    let actionCell = row.insertCell(keys.length);
    actionCell.innerHTML = `<button id="edit" onClick="edit()">Edit</button><button id="delete" onClick="deleteRow()">Delete</button>`;
    
}
const btn = document.getElementById("save");
btn.addEventListener("click", submitForm);