let postsData = [

  {
    author: "Logan", body:"Cables the son of original X-Man Scott Summers and the clone of Jean Grey who grew up in a war-torn future ruled by Apocalypse. Like a sci fi Lone Wolf & Cub, the new Cable series is packed with action, adventure, humor and everything else an X-Men fan could ask for. This is where youll find all the big-time action, major storylines and iconic Spider-Man magic youd come to expect from the Wall-Crawler. Iron Man, Thor, Captain America and the rest of Earths Mightiest Heroes unite to stand against the threats none can face alone.Amazing Spider-Man is the cornerstone of the Marvel Universe. Youve found it. Like a sci fi Lone Wolf & Cub, the new Cable series is packed with action, adventure, humor and everything else an X-Men fan could ask for. Marvels mighty mutants go worldwide and beyond in this series following Cyclops, Wolverine, Beast, Emma Frost and more in their astonishing adventures.", photoUrl: "http://www.indiewire.com/wp-content/uploads/2017/01/lohan.jpg"
  },
  {
    author: "Laura", body:"Cables the son of original X-Man Scott Summers and the clone of Jean Grey who grew up in a war-torn future ruled by Apocalypse. Like a sci fi Lone Wolf & Cub, the new Cable series is packed with action, adventure, humor and everything else an X-Men fan could ask for. This is where youll find all the big-time action, major storylines and iconic Spider-Man magic youd come to expect from the Wall-Crawler. Iron Man, Thor, Captain America and the rest of Earths Mightiest Heroes unite to stand against the threats none can face alone.Amazing Spider-Man is the cornerstone of the Marvel Universe. Youve found it. Like a sci fi Lone Wolf & Cub, the new Cable series is packed with action, adventure, humor and everything else an X-Men fan could ask for. Marvels mighty mutants go worldwide and beyond in this series following Cyclops, Wolverine, Beast, Emma Frost and more in their astonishing adventures.", photoUrl: "http://nerdist.com/wp-content/uploads/2016/10/Logan-1.jpg"
  },
  {
    author: "Charles", body:"Cables the son of original X-Man Scott Summers and the clone of Jean Grey who grew up in a war-torn future ruled by Apocalypse. Like a sci fi Lone Wolf & Cub, the new Cable series is packed with action, adventure, humor and everything else an X-Men fan could ask for. This is where youll find all the big-time action, major storylines and iconic Spider-Man magic youd come to expect from the Wall-Crawler. Iron Man, Thor, Captain America and the rest of Earths Mightiest Heroes unite to stand against the threats none can face alone.Amazing Spider-Man is the cornerstone of the Marvel Universe. Youve found it. Like a sci fi Lone Wolf & Cub, the new Cable series is packed with action, adventure, humor and everything else an X-Men fan could ask for. Marvels mighty mutants go worldwide and beyond in this series following Cyclops, Wolverine, Beast, Emma Frost and more in their astonishing adventures.", photoUrl: "http://cdn.collider.com/wp-content/uploads/2016/10/logan-patrick-stewart.jpg"
  }
]

angular
  .module("wdinstagram", ["ui.router"])
  .config([
   "$stateProvider",
    RouterFunction
  ])
.controller("PostsController",  ["$stateParams", PostsControllerFunction])

  function PostsControllerFunction($state, $stateParams) {
    this.posts = postsData;
  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("postsIndex", {
      url: "/",
      templateUrl: "posts-index.html",
      controller: "PostsController",
      controllerAs: "vm"
    })
  }
