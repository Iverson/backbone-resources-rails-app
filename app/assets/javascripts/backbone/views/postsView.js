App.Views.Posts = Resource.View.extend({
  el: "#app",
  
  // Auto-define this.template = JST["backbone/templates/posts/:action"] in each action and use it in render.
  templatesPath: "backbone/templates/posts",

  initialize: function() {
    _.bindAll(this);
    
    this.Posts = new App.Collections.Posts;
  },
  
  // Actions methods
  // ------------------------
  //
  // Automaticly call by Resource.Router when standart route fire.
  // After each action by convention fires render() method with params from router (:id) and with template from JST["backbone/templates/posts/:action"]
  // to disable this callback you should call skipRender() in body your action and if you want call render() by yourself, template would by also send automaticly.

  index: function() {
    this.render()
    
    this.PostsListView = new App.Views.PostsList({collection: this.Posts})
    this.Posts.fetch({reset: true, error: App.ajaxError})
  },
  
  new: function() {
    this.PostNewFormView = new App.Views.PostNewForm({collection: this.Posts})
  },
  
  // Auto-define this.params with :id from router
  show: function() {
    that = this
    this.post = new App.Models.Post({id: this.params.id})
    
    this.skipRender();
    
    this.post.fetch({
      success: function() {
        that.render(that.post.attributes)
      },
      error: function() {
        App.router.navigate(App.router.posts_path(), {trigger: true})
      }
    })
  },
  
  // Auto-define this.params with :id from router
  edit: function() {
    that = this
    this.post = new App.Models.Post({id: this.params.id})
    
    this.skipRender();

    this.post.fetch({
      success: function() {
        that.render(that.post.attributes);
        that.PostEditFormView = new App.Views.PostEditForm({model: that.post})
      },
      error: function() {
        App.router.navigate(App.router.posts_path(), {trigger: true});
      }
    })
  }
    
});
