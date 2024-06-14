// Initially create a null selectedRow
let selectedRow = null;

// function to trigger on click where default event is prevented formData retrieves data from getData
//  then condition to check if the row is empty to write or not if not then record is updated or when it is null then saveData with formData as parameter is used
// if else is finished then form is reset
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

            
            
            // function fetchdata
function getData(){
        return{
            name: document.getElementById("name-input").value,
            surname: document.getElementById("surname-input").value,
            email: document.getElementById("email-input").value,
            contact: document.getElementById("contact-input").value
               };
            }


// function saveData where data is designed in a cell
function saveData(formData){
    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    let row = table.insertRow(table.length);
    let keys = ["name", "surname", "email", "contact"];
    keys.forEach((key, index) => {
        let td = row.insertCell(index);
        td.innerHTML = formData[key];
    });
    let actionCell = row.insertCell(keys.length);
    actionCell.innerHTML = `<button onClick="edit(this)" class="edit">Edit</button><button class="delete" onClick="delete(this)">Delete</button>`;
}

// need to design function edit where particular index o frow is selected and input fields are filled with corresponding data then upon saving data should be saved back to its original row index
function edit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name-input").value = selectedRow.cells[0].innerHTML;
    document.getElementById("surname-input").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email-input").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact-input").value = selectedRow.cells[3].innerHTML;
 }

 function updateForm(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.surname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.contact;
    selectedRow = null;
    
 }




//  need to write function delete where total data is deleted and data is looked for that index of row at first and then an alert should be shown means to confirm the delete warning user to not be able to retrieve data once deleted






    // use keys array to store names of the variables and then for each key with properties key and index create new cell at the index and use formdata key to write innerHTML
       
    //  reset Form function is written
    function resetForm(){
        document.getElementById("name-input").value = "";
        document.getElementById("surname-input").value = "";
        document.getElementById("email-input").value = "";
        document.getElementById("contact-input").value = "";
        selectedRow = null;
    }
    
// finally savebtn with add event listener is pushed
const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", onFormSubmit);