var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username +'?access_token=' + apiKey).then(function(response){
    console.log(response);
    var repoURL = response.repos_url;
    var username = response.login;
    var githubURL = response.html_url;
    var createdDate = response.created_at;
    var numOfRepos = response.public_repos;
    var lastUpdate = response.updated_at;
    console.log("1 " + repoURL);
    console.log("2 " + username);
    console.log("3 " + githubURL);
    console.log("4 " + createdDate);
    console.log("5 " + numOfRepos);
    console.log("6 " + lastUpdate);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
