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
}


let saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", onSubmitForm(getData));