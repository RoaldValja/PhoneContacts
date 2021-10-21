function validate(){
    let nameInput = document.querySelector('#newName').value;
    let numberInput = document.querySelector('#newNumber').value;
    let errorMessage = document.querySelector('#errorMessage');
    let contactSubmit = document.querySelector('#contactSubmit');

    if(nameInput === "" || numberInput === ""){
        if(nameInput === "" && numberInput === "") {
            errorMessage.innerHTML = "Enter Name and Contact!";
        } else if(nameInput === "") {
            errorMessage.innerHTML = "Enter Name!";
        } else{
            errorMessage.innerHTML = "Enter Contact!";
        } 
        contactSubmit.disabled = true;
    } else {
        errorMessage.innerHTML = "";
        contactSubmit.disabled = false;
    }
}