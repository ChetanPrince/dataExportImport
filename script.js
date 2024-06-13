const formInput = document.querySelectorAll("#form input");
const tbody = document.getElementById("tbody");

// hardCoding formInput[0] value to sequential tds
//  instead we need the form to save data once each input field is filled correctly and save btn is pressed then dynamically the data should correspond to its required cell.
// firstly we need tr with th that claims their corresponding cells which should be hidden at first but after getting their first values should be visible


const saveData = () =>{
       let td1 = formInput[0].value,
       td2 = formInput[1].value,
       td3 = formInput[2].value,
       td4 = formInput[3].value;
        tbody.innerHTML += `<tr><td>${td1}</td><td>${td2}</td><td>${td3}</td><td>${td4}</td></tr>`;
       console.log(formInput[0].value)
        formInput[0].value="";
        formInput[1].value="";
        formInput[2].value="";
        formInput[3].value="";
}

const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", saveData);