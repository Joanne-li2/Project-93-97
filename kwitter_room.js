
      var firebaseConfig = {
            apiKey: "AIzaSyChXH9B8--Axo3zvPoD3ETUU7YtLKAeM7A",
            authDomain: "kwitter-9b7b6.firebaseapp.com",
            databaseURL: "https://kwitter-9b7b6-default-rtdb.firebaseio.com",
            projectId: "kwitter-9b7b6",
            storageBucket: "kwitter-9b7b6.appspot.com",
            messagingSenderId: "605078400827",
            appId: "1:605078400827:web:f373a52ce76e69f632511e"
          };
          
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          

          var user_name=localStorage.getItem("user_name")
          document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"

          function addRoom()
          {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
          }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}
