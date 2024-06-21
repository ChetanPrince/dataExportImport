let selectedRow = null;

function submitForm(e){
    e.preventDefault();
    let formData = getData();
    if(selectedRow == null){
        if(Object.values(formData).some(value => value === "")){
            alert("please fill required fields")
        }
        else{
            saveData(formData);
        }
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
    actionCell.innerHTML = `<button id="edit" onClick="edit(this)">Edit</button><button id="delete" onClick="deleteRow(this)">Delete</button>`;
    
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
    selectedRow.cells[0].innerHTML = formData["firstName"];
    selectedRow.cells[1].innerHTML = formData["surname"];
    selectedRow.cells[2].innerHTML = formData["email"];
    selectedRow.cells[3].innerHTML = formData["contact"];
    selectedRow = null;
}
function deleteRow(td){
    if(confirm("Are you sure you want to delete entire record?")){
        row = td.parentElement.parentElement;
        document.getElementById("table2").deleteRow(row.rowIndex);
        resetForm();
    }
}


const exportBtn = document.getElementById("export");
exportBtn.addEventListener("click", exportData);

const btn = document.getElementById("save");
btn.addEventListener("click", submitForm);