// James Barrett
(function() {
  //Model & controler here - view in HTML
  //https://api.github.com/users/jamesrbarrett2

  var module = angular.module("githubViewer");

  var RepoController = function($scope, github, $routeParams) {

    var reponame = $routeParams.reponame;
    var username = $routeParams.username;

    var onRepo = function(data) {
      $scope.repo = data;
    }

    var onError = function(reason) {
      $scope.error = reason;
    }

    github.getRepoDetails(username, reponame)
      .then(onRepo, onError);




  };
  module.controller("RepoController", RepoController);

}());