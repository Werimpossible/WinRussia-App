function loadPage(){
  splash()

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDubrku8KDKknKI65kLZoaajAcTNzjK4SY",
    authDomain: "winrussia-6387d.firebaseapp.com",
    databaseURL: "https://winrussia-6387d.firebaseio.com",
    projectId: "winrussia-6387d",
    storageBucket: "winrussia-6387d.appspot.com",
    messagingSenderId: "528662042752"
  };
  firebase.initializeApp(config);

  $("#btn-google").click(function(e){
  //e.preventDefault();
  authGoogle();
})

function authGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  window.location.href = "index.html"
//  console.log(result);
  // ...
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
//  console.log(errorCode);
  var errorMessage = error.message;
//  console.log(errorMessage);
  // The email of the user's account used.
  var email = error.email;
//  console.log(email);
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
//  console.log(credential);
  // ...
});
}


}


function splash() {
	setInterval(function() {
				$("#splash").hide();
        $("#main").removeClass("hide");
	 }, 3000);
}














$(document).ready(loadPage);
