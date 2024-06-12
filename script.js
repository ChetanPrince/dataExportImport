const formInput = document.querySelectorAll("#form input");
const tbody = document.getElementById("tbody");


const saveData = () =>{formInput.forEach(input =>{
        let tableContent = "";
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        for(let i=0; i<formInput.length; i++){
if(formInput[i].value === ""){
    return;
}else{
    let col = document.createElement("td");
    col.textContent = formInput[i].value;
    console.log(i); 
    tr.appendChild(col);
    }
        }
      
formInput[0].value = "";
formInput[1].value = "";
formInput[2].value = "";
formInput[3].value = "";
    // })
})}
const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", saveData);