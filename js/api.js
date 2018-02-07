/*
function UserAction() {
        $.get("https://yesno.wtf/api/", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });

};
*/


function UserAction() {
var xhr = new XMLHttpRequest();
console.log(xhr);
xhr.onreadystatechange = function(e) {
  if(this.readyState === 4){
    if(this.status === 200){
      var response = JSON.parse(this.response);

      var imageAnswer = response.image;
      var answer = document.getElementById('image-answer-container');
      var image = document.getElementById('image-answer').src = imageAnswer;
      answer.appendChild(image);

    }
  }
}
xhr.open("GET", "https://yesno.wtf/api/", true);
//xhr.setRequestHeader("Content-type", "application/json");
xhr.send();


}
/*
function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://yesno.wtf/api/", true);
    //xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    console.log(response);
}
*/
/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
    }
};
xmlhttp.open("GET", "json_demo.txt", true);
xmlhttp.send();
*/
