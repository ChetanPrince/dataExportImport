const formInput = document.querySelectorAll("#form input");

const saveData = () =>{formInput.forEach(input =>{
    // input.addEventListener("blur", ()=>{
        let tableContent = "";
        for(let i=0; i<formInput.length; i++){
            tableContent+=formInput[i].value + ",";
        }
        console.log(tableContent)
        // create tr and td here perhaps or above it and split data and then join
formInput[0].value = "";
formInput[1].value = "";
formInput[2].value = "";
formInput[3].value = "";
    // })
})}
const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", saveData);