var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(username, displayUserInfo, displayRepoInfo) {
  $.get('https://api.github.com/users/' + username +'?access_token=' + apiKey).then(function(response){
    console.log(response);

    var username = response.login;
    var githubURL = response.html_url;
    var lastUpdate = response.updated_at;
    displayUserInfo(username, githubURL, lastUpdate);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos?&per_page=100&access_token=' + apiKey).then(function(response){
      $("#repos").empty();

      displayRepoInfo(response);

    // for (var i = 0; i < response.length; i++){
    //   $("#repos").append("<hr><h2> Repository name: " + response[i].name +
    //                       "<br><a href='" + response[i].html_url + "'>" + "Repository link</a> " +
    //                       "<br>Description: " + response[i].description +
    //                       "<br>Created on: " + response[i].created_at +
    //                       "<br>Run the following command to clone: $ git clone " + response[i].clone_url +"</h2>");
    // }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
