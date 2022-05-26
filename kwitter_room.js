
var firebaseConfig = {
      apiKey: "AIzaSyD0WB9KOaVqSgGXfcgakhAZIaKTyjjxntg",
      authDomain: "kwitter-v1.firebaseapp.com",
      projectId: "kwitter-v1",
      storageBucket: "kwitter-v1.appspot.com",
      messagingSenderId: "735420322627",
      appId: "1:735420322627:web:b8b682dc3ab693706495f6"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
