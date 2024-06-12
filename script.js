const formInput = document.querySelectorAll("#form input");
const tbody = document.getElementById("tbody");


const saveData = () =>{formInput.forEach(input =>{
    // input.addEventListener("blur", ()=>{
        let tableContent = "";
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        for(let i=0; i<formInput.length; i++){
            
            let col = document.createElement("td");
            col.textContent = formInput[i].value;
            console.log(i);
            tr.appendChild(col);
    //  col.innerHTML += `<td>${formInput[i].value}</td>`;
            
        }
        // console.log(tableContent)
        // create tr and td here perhaps or above it and split data and then join and then reset input value to empty strings
formInput[0].value = "";
formInput[1].value = "";
formInput[2].value = "";
formInput[3].value = "";
    // })
})}
const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", saveData);