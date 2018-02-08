function loadPage(){

  matchBet();
}




function splash() {
	setInterval(function() {
				$("#splash").hide();
        $("#main").removeClass("hide");
	 }, 3000);
}

function matchBet{
 $("button").click(function(){
        $("#match").toggle();
    });
}



$(document).ready(loadPage);

