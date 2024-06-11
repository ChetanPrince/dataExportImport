const formInput = document.querySelectorAll("#form input");

formInput.forEach(input =>{
    input.addEventListener("blur", ()=>{

        console.log(formInput.length, formInput[0].value, formInput[1].value, formInput[2].value, formInput[3].value)
    })
})