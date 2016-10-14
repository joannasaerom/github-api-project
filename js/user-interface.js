var User = require('./../js/user.js').userModule;


function displayInfo(username, githubURL, createdDate, numOfRepos, lastUpdate){
  $("#uName").text(username);
  $("#ghURL").text(githubURL);
  $("cDate").text(createdDate);
  $("numRepos").text(numOfRepos);
  $("#updateDate").text(lastUpdate);
}

function listRepos(repoURL){
  for (var i = 0; i < repoURL.length; i++){
    $("#repos").append("<li>" + repoURL[i] + "</li>");
  }
}

$(document).ready(function() {
  var repoURL, username, githubURL, createdDate, numOfRepos, lastUpdate;
  var newUser = new User();
  $("#searchBtn").click(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $("#username").val("");
    newUser.getRepos(username, displayInfo(), listRepos());
  });


});
