const formInput = document.querySelectorAll("#form input");
const tbody = document.getElementById("tbody");


const saveData = () =>{formInput.forEach(input =>{
    input.addEventListener("blur", e =>{
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        let col = document.createElement("td");
        tr.appendChild(col);

        col += input.value;
        console.log(col);
})

            // Now we have a problem here when first input is empty then function does not operate and when another field input is not filled then only the continuous filled input is picked and loop is run for four times for that single loop
            // 1. stop loop to iterate 4 times
            // 2. grab input values according to their ids#
            // 3. match input values to their corresponding input fields
            // 4. set them in the same order in the table
            // 5. display table content



            //Observation:   content is only representing data if all input fields are filled 
// if(formInput[i].value === ""){
//     return;
// }else{
//     let col = document.createElement("td");
//     col.textContent = formInput[i].value;
//     console.log(i); 
//     tr.appendChild(col);
//     }
        // }
      
formInput[0].value = "";
formInput[1].value = "";
formInput[2].value = "";
formInput[3].value = "";
    // })
})}
const saveBtn = document.getElementById("save");
saveBtn.addEventListener("click", saveData);