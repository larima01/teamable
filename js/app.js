function handleEditProfile(){
  new Datepicker("#birthday");
    let name = document.getElementById("name").textContent;
    let inputName = document.getElementById("input-name");
    inputName.value = name;

    let email = document.getElementById("email").textContent;
    let inputEmail = document.getElementById("input-email");
    inputEmail.value = email;

    let interests = document.getElementById("interests").textContent;
    let inputInterests = document.getElementById("input-interests");
    inputInterests.value = interests;

    document.getElementById("edit-view").style.display = "block";
    document.getElementById("main-container").style.display = "none";
}

function handleUpdateProfile(){
    let updateName = document.getElementById("input-name").value;
    let name = document.getElementById("name");
    name.textContent = updateName;

    let updateEmail = document.getElementById("input-email").value;
    let email = document.getElementById("email");
    if(validator.isEmail(updateEmail)){
        email.textContent = updateEmail;
    } else{
        alert("Wron email format");
    }
    

    let updateInterests = document.getElementById("input-interests").value;
    let interests = document.getElementById("interests");
    interests.textContent = updateInterests;

    document.getElementById("main-container").style.display = "block";
    document.getElementById("edit-view").style.display = "none";
}