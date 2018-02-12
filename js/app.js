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
  window.location.href = "views/principal.html";
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
  authenticationFacebook(provider);
}

function authenticationFacebook(provider){
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope("public_profile");
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    localStorage.setItem("nombre", user.displayName);
    window.location.href = "views/principal.html";
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

//Función para agregar datos de usuario
function inizializarFire(){
  firebase.auth().onAuthStateChanged(function(user) {
    var $userPicture = $("user-pic");
    var $userName = $("user-name");


    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      localStorage.setItem("displayName1", displayName);
      var userPhoto = user.photoURL;
      console.log(userPhoto);
      console.log(displayName);
      //var $displayName2 = localStorage.getItem(displayName1);
      //console.log(displayName2);

      $userName.textContent = displayName;
      $userPicture.attr('src', userPhoto);


    }
  });
  }
//window.onload = function(){
  inizializarFire()
//}



    //Botón para ingresar con correo electrónico y contraseña
    $("#btn-mail-access").click(loginWithMail);

}



  //Función para ingresar con correo electrónico y contraseña
function loginWithMail() {
	var $loginEmail = $("#login-email").val();
	var $loginPassword = $("#login-password").val();

		firebase.auth().signInWithEmailAndPassword($loginEmail, $loginPassword)
		.then(function(result){
			window.location.href = "views/principal.html";
		})
		.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});

}


//**************---------- APIS FUNCTIONS ---------**************

//API https://yesno.wtf/



function questionPaul() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(e) {
  if(this.readyState === 4){
    if(this.status === 200){
      var response = JSON.parse(this.response);

      var imageAnswer = response.image;
      var answer = document.getElementById('image-answer-container');
      var image = document.getElementById('image-answer').src = imageAnswer;

    }
  }
}
xhr.open("GET", "https://yesno.wtf/api/", true);
//xhr.setRequestHeader("Content-type", "application/json");
xhr.send();

}
$("#btn-answer-paul").click(questionPaul)








//**************---------- FIN APIS FUNCTIONS ---------**************



// Función splash
function splash() {
	setInterval(function() {
				$("#splash").hide();
        $("#main").removeClass("hide");
	 }, 3000);
}

$(document).ready(loadPage);
