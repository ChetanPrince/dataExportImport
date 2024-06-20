let selectedValue = null;

function submitForm(e){
    e.preventDefault();
    if(selectedValue == null){
        saveData(getData);
    }
    else{
        updateForm(getData);
    }
}

function getData(){
    return{firstName: document.getElementById("name-input"),
    surname: document.getElementById("surname-input"),
    email: document.getElementById("email-input"),
    contact: document.getElementById("contact-input")}
}

function saveData(getData){
    const table = document.querySelector("table2", tbody[0] )
}
