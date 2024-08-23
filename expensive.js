const button = document.getElementById("addExpense");
button.addEventListener("click", ()=>{
   console.log(getValues());
})



function getValues(){
    return {

         name : document.getElementById("name").value,
         value : document.getElementById("value").value,
         type : document.getElementById("type").value,
        time : document.getElementById("time").value
    }
}



