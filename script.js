const formInput = document.querySelectorAll("#form input");
const tbody = document.getElementById("tbody");

let selectedRow = null;

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

let formData = [];
// Crud operations firstly store inputs in a variable
function getData(){
let nameInput = document.getElementById("name-input").value;
let surnameInput= document.getElementById("surname-input").value;
let emailInput  = document.getElementById("email-input").value;
let contactInput = document.getElementById("contact-input").value;
 // Store the values in an object
 const data = {
    nameInput: nameInput,
    surnameInput: surnameInput,
    emailInput: emailInput,
    contactInput: contactInput
};

// Push the object into the array
formData.push(data);
return formData;
}

function saveData(formData){
    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);

       let td1 = newRow.insertCell(0);
       td1.innerHTML = formData.nameInput;
       let td2 = newRow.insertCell(1);
       td2.innerHTML = formData.surnameInput;
       let td3 = newRow.insertCell(2);
       td3.innerHTML = formData.emailInput;
       let td4 = newRow.insertCell(3);
       td4.innerHTML = formData.contactInput;
       let td5 = newRow.insertCell(4);
       td5.innerHTML = `<button onClick="edit(this)">Edit</button><button onClick="delete(this)">Delete</delete>`;}


const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", saveData());