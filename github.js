(function() {
  //this is an iffy wrapping a custom angular service

  var github = function($http) {

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        })

    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        })
    };

    //adding new method to our service
    var getRepoDetails = function(username, reponame) {
      var repo;
      var repoURL = "https://api.github.com/repos/" + username + "/" + reponame;

      return $http.get(repoURL)
        .then(function(response){
          repo = response.data;
          return $http.get(repoURL + "/contributors");
        })
        .then(function(response) {
          repo.contibutors = respons.data;
          return repo;qa
        })
    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    }
  };



  var module = angular.module("githubViewer");
  module.factory("github", github);

}());