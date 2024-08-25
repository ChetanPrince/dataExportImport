const button = document.getElementById("addExpense");
let selectedRow = null;
button.addEventListener("click", (e)=>{
    e.preventDefault();
    let formData = getValues();
    if(selectedRow == null){
        saveData(formData);
    }
    else{
        updateForm(formData);
    }
    clearForm();
})

function saveData(formData){
    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    let row = table.insertRow(table.length);
    let keys = ["name", "value", "type", "time"];
    keys.forEach((key, index)=>{
       let td = row.insertCell(index);
       td.innerHTML = formData[key];
    });
    let actionCell = row.insertCell(keys.length);
    actionCell.innerHTML = `<button onClick="edit(this)">Edit</button><button onClick="deleteRow()">Delete</button>`;
}
function edit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].textContent;
    document.getElementById("value").value = selectedRow.cells[1].textContent;
    document.getElementById("type").value = selectedRow.cells[2].textContent;
    document.getElementById("time").value = selectedRow.cells[3].textContent;

}

function getValues(){
    return {
         name : document.getElementById("name").value,
         value : document.getElementById("value").value,
         type : document.getElementById("type").value,
        time : document.getElementById("time").value
    };
}

function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("value").value = "";
    document.getElementById("type").value = "";
    document.getElementById("time").value = "";
}
function updateForm(formData){
   selectedRow.cells[0].textContent = formData.name;
        selectedRow.cells[1].textContent = formData.value;
        selectedRow.cells[2].textContent = formData.type;
        selectedRow.cells[3].textContent =formData.time;
        selectedRow = null;

}


