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