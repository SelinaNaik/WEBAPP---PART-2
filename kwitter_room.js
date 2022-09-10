firebaseConfig = {
      apiKey: "AIzaSyBLGU9o8fsM8Q6mbI3BSc8yXDHGOsAFAbE",
      authDomain: "console2-63fb2.firebaseapp.com",
      projectId: "console2-63fb2",
      storageBucket: "console2-63fb2.appspot.com",
      messagingSenderId: "117661506645",
      appId: "1:117661506645:web:b54fac2711b5b0d851c8dc"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
