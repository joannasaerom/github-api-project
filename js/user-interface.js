var User = require('./../js/user.js').userModule;

$(document).ready(function() {
  var newUser = new User();
  $("#searchBtn").click(function(event){
    event.preventDefault();
    var username = $("#username").val();
    $("#username").val("");
    newUser.getRepos(username);
  });


});
