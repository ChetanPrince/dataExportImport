const button = document.getElementById("addExpense");
button.addEventListener("click", (e)=>{
    let selectedRow = null;
    e.preventDefault();
    let formData = getValues();
    if(selectedRow == null){
        saveData(formData);
        clearForm();
    }
    else{
        updateForm();
        selectedRow = null;
    }
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
    console.log(selectedRow.cells[0].textContent);
    document.getElementById("name").value = selectedRow.cells[0].textContent;

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


