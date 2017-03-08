angular
  .module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])

  .config([
   "$stateProvider",
    RouterFunction
  ])

  .factory("PostsFactory", [
    "$resource",
    PostsFactoryFunction
  ])

  .controller("PostsIndexController", [
    "PostsFactory",
    PostsIndexControllerFunction
  ])


  function PostsFactoryFunction( $resource ) {
    return $resource( "http://localhost:3000/entries/:id");
  }

  function PostsIndexControllerFunction( PostsFactory ){
    this.posts = PostsFactory.query();
  }


  function RouterFunction($stateProvider){
    $stateProvider
    .state("postsIndex", {
      url: "/posts",
      templateUrl: "js/ng-views/index.html",
      controller: "PostsIndexController",
      controllerAs: "vm"
    })
    .state("postsShow", {
      url: "/posts/:id",
      templateUrl: "js/ng-views/show.html"
    })
  }
