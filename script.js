const formInput = document.querySelectorAll("#form input");
const tbody = document.getElementById("tbody");

let selectedRow = null

function onFormSubmit(e) {
	e.preventDefault();
        let formData = getData();
        if (selectedRow == null){
            saveData(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

// Crud operations firstly store inputs in a variable
function getData(){
    let formData = {};
formData["nameInput"] = document.getElementById("name-input").value;
formData["surnameInput"] = document.getElementById("surname-input").value;
formData["emailInput"] = document.getElementById("email-input").value;
formData["contactInput"] = document.getElementById("contact-input").value;
return formData;
}

function saveData(data){
    let table = document.getElementById("table").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

       let td1 = newRow.insertCell(0);
       td1.innerHTML = data.nameInput;
       let td2 = newRow.insertCell(1);
       td2.innerHTML = data.surnameInput;
       let td3 = newRow.insertCell(2);
       td3.innerHTML = data.emailInput;
       let td4 = newRow.insertCell(3);
       td4.innerHTML = data.contactInput;
       let td5 = newRow.insertCell(4);
       td5.innerHTML = `<button onClick="edit(this)">Edit</button><button onClick="delete(this)">Delete</delete>`;}


// const saveBtn = document.getElementById("save");
// saveBtn.addEventListener("click", saveData());