function statisticsData(){
    $.getJSON("http://worldcup.sfg.io/teams/results", function(result){

            result.forEach(function(team){
                var country = team["country"];
                var wins = team["wins"];
                var draws = team["draws"];
                var losses = team["losses"];
                var games = team["games_played"];
                var points = team["points"];
                var goalsFor = team["goals_for"];
                var goalsAgainst = team["goals_against"];
                var goalDifferential = team["goal_differential"];
                printStatistics(country, wins, draws, losses, games, points, goalsFor, goalsAgainst, goalDifferential);
            });

    });
};


$("#btn-statistics").click(statisticsData)


//----FUNCIÓN PARA PINTAR LA SECCIÓN DE ESTADÍSTICAS
function printStatistics(country, wins, draws, losses, games, points, goalsFor, goalsAgainst, goalDifferential) {


// crear elementos con DOM
  var $team = $("<div />", {"class":"team-info card-panel"});
  var $teamCountry = $("<h5 />");

  var $row1 = $("<div />", {"class":"row"});
  var $col1r1 = $("<div />", {"class":"col s4"});
  var $winMatch = $("<span />");
  var $teamWins = $("<h6 />");
  var $col2r1 = $("<div />", {"class":"col s4"});
  var $drawMatch = $("<span />");
  var $teamDraws = $("<h6 />");
  var $col3r1 = $("<div />", {"class":"col s4"});
  var $lossesMatch = $("<span />");
  var $teamLosses = $("<h6 />");

  var $row2 = $("<div />", {"class":"row"});
  var $col1r2 = $("<div />", {"class":"col s6"});
  var $gamesMatch = $("<span />");
  var $teamGames = $("<h6 />");
  var $col2r2 = $("<div />", {"class":"col s6"});
  var $pointsMatch = $("<span />");
  var $teamPoints = $("<h6 />");

  var $row3 = $("<div />", {"class":"row"});
  var $col1r3 = $("<div />", {"class":"col s4"});
  var $goalsForMatch = $("<span />");
  var $teamGoalsFor = $("<h6 />");
  var $col2r3 = $("<div />", {"class":"col s4"});
  var $goalsAgainstMatch = $("<span />");
  var $teamGoalsAgainst = $("<h6 />");
  var $col3r3 = $("<div />", {"class":"col s4"});
  var $goalDifferentialtMatch = $("<span />");
  var $teamGoalDifferential = $("<h6 />");

// a los elementos creados les agregamos el contenido de la data obtenida del api
  $teamCountry.text(country.toUpperCase());
  $teamWins.text(wins);
  $teamDraws.text(draws);
  $teamLosses.text(losses);
  $teamGames.text(games);
  $teamPoints.text(points);
  $teamGoalsFor.text(goalsFor);
  $teamGoalsAgainst.text(goalsAgainst);
  $teamGoalDifferential.text(goalDifferential);

//Agregamos los textos a los span
  $winMatch.text("Ganados: ");
  $drawMatch.text("Empates: ");
  $lossesMatch.text("Perdidos: ");
  $gamesMatch.text("Jugados: ");
  $pointsMatch.text("Puntos: ");
  $goalsForMatch.text("Gol. a favor: ");
  $goalsAgainstMatch.text("En contra: ");
  $goalDifferentialtMatch.text("Dif. de goles: ")

//agregamos los elementos al html

  $team.append($teamCountry);

  $col1r1.append($winMatch);
  $col1r1.append($teamWins);
  $col2r1.append($drawMatch);
  $col2r1.append($teamDraws);
  $col3r1.append($lossesMatch);
  $col3r1.append($teamLosses);
  $row1.append($col1r1);
  $row1.append($col2r1);
  $row1.append($col3r1);

  $col1r2.append($gamesMatch);
  $col1r2.append($teamGames);
  $col2r2.append($pointsMatch);
  $col2r2.append($teamPoints);
  $row2.append($col1r2);
  $row2.append($col2r2);

  $col1r3.append($goalsForMatch);
  $col1r3.append($teamGoalsFor);
  $col2r3.append($goalsAgainstMatch);
  $col2r3.append($teamGoalsAgainst);
  $col3r3.append($goalDifferentialtMatch);
  $col3r3.append($teamGoalDifferential);
  $row3.append($col1r3);
  $row3.append($col2r3);
  $row3.append($col3r3);


  $team.append($row1);
  $team.append($row2);
  $team.append($row3);

  $("#teams-container").append($team);


}
