App.Router = Resources.Router.extend({
  
  // Just define Resource.View which would be handle all standart actions by resource. (index, new, show, edit)
  //
  // For each resources will be created 4 helpers methods for simple generate urls for links.
  //
  // Example:
  //     posts_path() => '#posts'
  //     new_post_path() => '#posts/new'
  //     post_path(12) => '#posts/12'
  //     edit_post_path(12) => '#posts/12/edit'
  //     special_posts_path() => '#posts/special'
  //     details_post_path(12) => '#posts/12/details'
  
  resources: {
    posts : {view: App.Views.Posts, actions: ['index', 'new', 'special'], item_actions: ['show', 'edit', 'details']}
  },
  
  redirects: {
    ".*"    : "posts",
    "p/:id" : "posts/:id/details"
  }
    
});