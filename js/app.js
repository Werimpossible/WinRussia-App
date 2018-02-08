function loadPage(){

  $('ul.tabs').tabs('select_tab', 'tab_id');
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();


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
  localStorage.setItem("nombre", user.displayName);
  window.location.href = "index.html";
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


$("#btn-facebook").click(function(e){
//e.preventDefault();
authFacebook();
})

function authFacebook(){
  var provider = new firebase.auth.FacebookAuthProvider();
  console.log(provider);
  authentication(provider);
}

function authentication(provider){
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("public_profile");
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
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
