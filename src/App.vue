<template>
        <div id="main-container">
        <h1>User profile</h1>
        <img :src="image" alt="">
        <span>Name: </span> <b id="name">Aminu Lukmon</b>
        <hr />
    
        <span>Email: </span> <b id="email">lukasaminu@gmail.com</b>
        <hr />
    
        <span>Interests: </span> <b id="interests">Coding</b>
        <hr />
        <button @click="handleEditProfile">Edit Profile</button>
    </div>
    <div id="edit-view">
        <h1>Update profile</h1>
        <img :src="image" alt="">
        <span>Name: </span> 
        <input type="text" id="input-name" placeholder="Aminu Lukmon" />
        <hr />
    
        <span>Email: </span> 
        <input type="text" id="input-email" placeholder="lukasaminu@gmail.com" />
        <hr />
    
        <span>Interests: </span> 
        <input type="text" id="input-interests" placeholder="Coding" />
        <hr />
        <button @click="handleUpdateProfile">Update Profile</button>
    </div>
</template>
<script>
import image from "./image/rabbit.jpg";
    export default{
        name: "App",
        data() {
            return {
                image: image
            }
        },
        methods: {
            handleEditProfile(){
                
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
            },
            handleUpdateProfile(){
                let updateName = document.getElementById("input-name").value;
                let name = document.getElementById("name");
                name.textContent = updateName;

                let updateEmail = document.getElementById("input-email").value;
                let email = document.getElementById("email");
                email.textContent = updateEmail;
                let updateInterests = document.getElementById("input-interests").value;
                let interests = document.getElementById("interests");
                interests.textContent = updateInterests;

                document.getElementById("main-container").style.display = "block";
                document.getElementById("edit-view").style.display = "none";
            }
        }
}
</script>
<style>
    body{
    margin: 0;
    padding: 0;
}
img{
    height: 270px;
    width: 320px;
    display: block;
    margin-bottom: 40px;
}

#main-container{
    margin: 40px auto;
    width: 80%;
}
hr{
    width: 400px;
    margin: 25px 0;
}

button{
    width: 160px;
    font-size: 15px;
    height: 45px;
    border-radius: 5px;
}

button:hover{
    cursor: pointer;
    
}

.datepicker{
    margin-top: 0px;
    margin-bottom: 0px;
}

#edit-view{
    margin: 40px auto;
    width: 80%;
    display: none;
}

input{
    width: 200px;
    font-size: 15px;
    padding: 10px;
}
</style>