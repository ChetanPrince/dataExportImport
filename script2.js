let selectedRow = null;
function onSubmitForm(event){
    event.preventDefault();
    let formData = getData();
    if(selectedRow === null){
        saveData(formData);
    }else{
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
};

    function saveData(formData){
        let table = document.getElementById("table2").getElementsByTagName("tbody")[0];
        let newRow = table.insertRow(table.length);
        let keys = ["name", "surname", "email", "contact"];
        keys.forEach((key, index)=>{
            let td = newRow.insertCell(index);
            td.innerHTML = formData[key];
        });
        let actionCell = newRow.insertCell(newRow.length);
        actionCell.innerHTML = `<button id="edit" onClick="edit(this)">Edit</button><button id="delete" onClick="deleteRow(this)">Delete</button>`;
    }
    function resetForm(formData){
        document.getElementById("name-input").value="";
        document.getElementById("surname-input").value="";
        document.getElementById("email-input").value="";
        document.getElementById("contact-input").value="";
    }

    function edit(td){
        selectedRow = td.parentElement.parentElement;
        document.getElementById("name-input").value= selectedRow.cells[0].innerHTML;
        document.getElementById("surname-input").value= selectedRow.cells[1].innerHTML;
        document.getElementById("email-input").value=selectedRow.cells[2].innerHTML;
        document.getElementById("contact-input").value=selectedRow.cells[3].innerHTML;
    }
    function updateForm(formData){
        selectedRow.cells[0].innerHTML = formData["name"];
        selectedRow.cells[1].innerHTML = formData["surname"];
        selectedRow.cells[2].innerHTML = formData["email"];
        selectedRow.cells[3].innerHTML = formData["contact"];
        selectedRow = null;
    }
    function deleteRow(td){
        row = td.parentElement.parentElement;
        if(confirm("Are you sure you want to delete this record")){
            document.getElementById("table2").deleteRow(row.rowIndex);
            resetForm();
        };
    }


    function exportData(){
        let rows = document.querySelectorAll("#table2 tr");
        let csvContent = "";
        rows.forEach(row =>{
            let td = Array.from(row.querySelectorAll("td, th"));
            td.pop();
            let rowContent =Array.from(td).map(td => td.textContent).join(",");
            csvContent += rowContent+"\n";

        });
        const blob = new Blob([csvContent], {type:"text/csv"});
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "download.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(blob);

    }
    function importData(file){
        let reader = new FileReader();
        reader.onload = function (event){
            let text = event.target.result;
            let rows = text.split("\n").map(row => row.split(","));
            let table = document.getElementById("table2").getElementsByTagName("tbody")[0];
            table.innerHTML = "";
            rows.forEach(row => {
                if(row.length >=4){
                    let newRow = table.insertRow();
                    row.forEach((cell, index) =>{
                        let td = newRow.insertCell(index);
                        td.innerHTML = cell;
                    });
                    if(row.length === 5){
                        let actionCell = newRow.cells[newRow.cells.length-1];
                        let actions = actionCell.innerHTML.split(" ");
                        if(actions.length >= 2){
                            actionCell.innerHTML = `<button id="edit" onClick="edit(this)">${actions[0]}</button><button id="delete" onClick="deleteRow(this)">${actions[1]}</button>`
                        }
                        else{
                 actionCell.innerHTML =  `<button id="edit" onClick="edit(this)">Edit</button><button id="delete" onClick="deleteRow(this)">Delete</button>`
                        }}
                        else{
                            let actionCell = newRow.insertCell(newRow.cells.length);
                            actionCell.innerHTML =   `<button id="edit" onClick="edit(this)">Edit</button><button id="delete" onClick="deleteRow(this)">Delete</button>`
                        }}});
            }; reader.readAsText(file);

    }


    const exportBtn = document.getElementById("export");
    exportBtn.addEventListener("click", exportData);
    
    const importBtn = document.getElementById("import");
    importBtn.addEventListener("click", ()=>{
        const csvFileInput = document.getElementById("csvFileInput");
        let file = csvFileInput.files[0];
        if(file){
            importData(file);
        };

    });


    const saveBtn = document.getElementById("save");
    saveBtn.addEventListener("click", onSubmitForm);