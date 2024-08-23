const button = document.getElementById("addExpense");
button.addEventListener("click", (e)=>{
    e.preventDefault();
    let formData = getValues();
  saveData(formData);
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

function getValues(){
    return {
         name : document.getElementById("name").value,
         value : document.getElementById("value").value,
         type : document.getElementById("type").value,
        time : document.getElementById("time").value
    };
}



