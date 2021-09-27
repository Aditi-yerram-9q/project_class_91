var firebaseConfig = {
    apiKey: "AIzaSyC5-MvD4KnzXwSvmxtTMZWOLAqR5RMITbw",
    authDomain: "kwitter-b5a95.firebaseapp.com",
    databaseURL: "https://kwitter-b5a95-default-rtdb.firebaseio.com",
    projectId: "kwitter-b5a95",
    storageBucket: "kwitter-b5a95.appspot.com",
    messagingSenderId: "249908128985",
    appId: "1:249908128985:web:508684cccb8ded25a162c8"
  };
  

 firebase.initializeApp(firebaseConfig);
 
 function adduser() {
     user_name=document.getElementById("user_name").value ;
     firebase.database().ref("/").child(user_name).update({
         purpose: "adding user",
         uname:"Aditi",
         age : "11"

     });
 }