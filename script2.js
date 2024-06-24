let selectedValue = null;
function onSubmitForm(getData){
    let formData = getData();
    if(selectedValue == null){
        savaData(formData);
        resetData();
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
    }
}
function saveData(getData){
let table =  document.getElementById("table2").getElementsByTagName("tbody")[0];
}


let saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", onSubmitForm(formData));