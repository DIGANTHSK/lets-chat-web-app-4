https://kwitter-c8c91-default-rtdb.firebaseio.com

function addUser()
{
user_name = document.getElementById("user name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
}
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome"+ user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name", room_name);

window.location = "kwitter_room.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});


}

getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = ("kwitter_pagr.html")
{

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter.html";
}
