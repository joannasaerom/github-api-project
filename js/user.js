var apiKey = require('./../.env').apiKey;

function User() {

}

User.prototype.getRepos = function(username) {
  $.get('https://api.github.com/users/' + username +'?access_token=' + apiKey).then(function(response){
    console.log(response);

    var username = response.login;
    var githubURL = response.html_url;
    var lastUpdate = response.updated_at;

    $("#uName").text(username);
    $("#ghURL").text(githubURL);
    $("#updateDate").text(lastUpdate);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos?&per_page=100&access_token=' + apiKey).then(function(response){
      $("#repos").empty();
    for (var i = 0; i < response.length; i++){
      $("#repos").append("<h2> Repository link: " +
                          response[i].html_url + "<br>Description: " +
                          response[i].description + "<br>Git URL: " +
                          response[i].clone_url + "<br>Created At: " +
                          response[i].created_at +"</h2>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
