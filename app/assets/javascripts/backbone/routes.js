App.Router = Resource.Router.extend({
  
  // Just define Resource.View which would be handle all standart actions by resource. (index, new, show, edit)
  //
  // For each resources will be created 4 helpers methods for simple generate urls for links.
  //
  // Example:
  //     posts_path() => '#posts'
  //     new_post_path() => '#posts/new'
  //     post_path(12) => '#posts/12'
  //     edit_post_path(12) => '#posts/12/edit'
  
  resources: {
    posts : App.Views.Posts
  },

  routes: {
    ".*"  : "index"
  },
  
  index: function()
  {
    this.navigate(this.posts_path(), {trigger: true});
  }

    
})

  
    