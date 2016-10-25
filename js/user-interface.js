var User = require('./../js/user.js').userModule;

function displayUserInfo(username, githubURL, lastUpdate){
  $("#userInfo").show();
  $("#uName").text(username);
  $("#ghURL").html("<a href='" + githubURL + "'>" + githubURL + "</a>");
  $("#updateDate").text(lastUpdate);
}

function displayRepoInfo(userRepos){
  for (var i = 0; i < userRepos.length; i++){
    $("#repos").append("<hr><h2> Repository name: " + userRepos[i].name +
                        "<br><a href='" + userRepos[i].html_url + "'>" + "Repository link</a> " +
                        "<br>Description: " + userRepos[i].description +
                        "<br>Created on: " + userRepos[i].created_at +
                        "<br>Run the following command to clone: $ git clone " + userRepos[i].clone_url +"</h2>");
  }
}

$(document).ready(function() {
  var repoURL, username, githubURL, createdDate, numOfRepos, lastUpdate;
  var newUser = new User();
  $("#searchBtn").click(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $("#username").val("");
    newUser.getRepos(username, displayUserInfo, displayRepoInfo);
  });
});
