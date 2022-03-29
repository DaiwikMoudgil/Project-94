
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD8fgusdt6VSudD8YO7kKLqD8vQbTnnMGc",
      authDomain: "my-chat-box-app.firebaseapp.com",
      databaseURL: "https://my-chat-box-app-default-rtdb.firebaseio.com",
      projectId: "my-chat-box-app",
      storageBucket: "my-chat-box-app.appspot.com",
      messagingSenderId: "734318685782",
      appId: "1:734318685782:web:e66b179a1b4de3c23d95f7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("welcome_user_name").innerHTML ="Welcome "+ user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
      window.location = "index.html"
      localStorage.removeItem("user_name")
}

function addroom()
{
      room_name = document.getElementById("room_name").value ;
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_room.html";
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      })
}