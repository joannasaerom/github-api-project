var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(username, functionOne, functionTwo) {
  $.get('https://api.github.com/users/' + username +'?access_token=' + apiKey).then(function(response){
    console.log(response);

    var repoURL = response.repos_url;
    var username = response.login;
    var githubURL = response.html_url;
    var createdDate = response.created_at;
    var numOfRepos = response.public_repos;
    var lastUpdate = response.updated_at;

    functionOne(username, githubURL, createdDate, numOfRepos, lastUpdate);
    functionTwo(repoURL);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
