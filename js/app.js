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
    var userPicture = $("user-pic");
    var userName = $("user-name");


    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var userPhoto = user.photoURL

      $userName.textContent = displayName;
      $userPicture.attr("src", phoyoURL);

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
var btnAnswer = document.getElementById('btn-answer-paul');
btnAnswer.addEventListener("click", questionPaul);







//**************---------- FIN APIS FUNCTIONS ---------**************
var stripe = Stripe('pk_test_IAfkZML5suOBMwsgaeELNhpt');

// Create an instance of Elements
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Handle form submission
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server
      stripeTokenHandler(result.token);
    }
  });
});


// Función splash
function splash() {
	setInterval(function() {
				$("#splash").hide();
        $("#main").removeClass("hide");
	 }, 3000);
}

$(document).ready(loadPage);
