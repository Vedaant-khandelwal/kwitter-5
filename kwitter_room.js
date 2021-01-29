
var firebaseConfig = {
      apiKey: "AIzaSyBZIFE-0TjI7ehM7uBQz75xJq4Vqz0gFU8",
      authDomain: "kwitter-64482.firebaseapp.com",
      databaseURL: "https://kwitter-64482-default-rtdb.firebaseio.com",
      projectId: "kwitter-64482",
      storageBucket: "kwitter-64482.appspot.com",
      messagingSenderId: "800688537208",
      appId: "1:800688537208:web:c44e9e0964200fb22bf78d",
      measurementId: "G-XX1NC7VSGK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML= " WELCOME " + user_name + " ! ";

    function addRoom()
    {
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location= "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      });});}


getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}

function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
