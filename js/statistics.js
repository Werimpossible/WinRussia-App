


function statistics() {
var xhr = new XMLHttpRequest();
console.log(xhr);
xhr.onreadystatechange = function(e) {
  if(this.readyState === 4){
    if(this.status === 200){
      var response = JSON.parse(this.response);

    console.log(response);

    }
  }
}
xhr.open("GET", "http://www.apiclient.resultados-futbol.com/scripts/api/api.php?key=f856f5e068a8f8a748e8721447387b6b&format=json&req=matchsday&filter=all", true);


xhr.send();


}

var btnStatistics = document.getElementById('btn-statistics');
btnStatistics.addEventListener("click", statistics);
