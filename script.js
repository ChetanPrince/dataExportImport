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
function deleteRow(td){
if(confirm("Are you sure to delete the record?")){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    resetForm;
}
}


const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", onFormSubmit);


// Now we need to export data as csv content

// created a function that downloads a file when clicked
function exportData(){
  
    let rows = document.querySelectorAll("#table tr");
       let csvContent = "";
        rows.forEach(row =>{
        let cols = row.querySelectorAll("td, th");
        let rowContent = Array.from(cols).map(col=>col.textContent).join(",");
        csvContent += rowContent + "\n";
    });
           
        const blob = new Blob([csvContent], {type:"text/csv"});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "download_data.csv";
        document.body.appendChild(a);            
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
            }

const exportDataBtn = document.getElementById("export");
exportDataBtn.addEventListener("click", exportData);

function importFromCSV(file){
    const reader = new FileReader();
    reader.onload = function(event){
        const text = event.target.result;
        const rows = text.split("\n").map(row => row.split(","));
        const table = document.getElementById("table").getElementsByTagName("tbody")[0];
        table.innerHTML = "";

        rows.forEach(row => {
            if (row.length >= 4){
                let newRow = table.insertRow();
                row.forEach((cell, index_ => {
                    let td = newRow.insertCell(index);
                    td.innerHTML = cell;

                });
            let actionCell = newRow.insertCell(index);
                actionCell.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                                        <button onClick="deleteRow(this)">Delete</button>`;
        )
            }
        })
    }
}