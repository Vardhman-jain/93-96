  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAslucTdi6f2AjoKO_nCPfFESlu3UutHOA",
    authDomain: "pro2-c3968.firebaseapp.com",
    databaseURL: "https://pro2-c3968-default-rtdb.firebaseio.com",
    projectId: "pro2-c3968",
    storageBucket: "pro2-c3968.appspot.com",
    messagingSenderId: "888071925376",
    appId: "1:888071925376:web:61a06987deaa1cb8afc065"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom() {
    room_name=document.getElementById('room_name').value;

    firebase.database().ref("/").child(room_name).update({
      purpose:"add room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
  getData();

  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location="index.html";
  }

  function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
    })
  }