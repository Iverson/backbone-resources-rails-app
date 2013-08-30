App.Views.PostNewForm = Resource.View.extend({
  el: "#app",
  
  events: {
	  'click .js-createPost': 'createPost'
	},

  initialize: function() {
    _.bindAll(this);
  },
    
  showValidationErrors: function() {
    $('#errors').empty();

    for (key in this.model.validationError)
    {
      $('#errors').append("<p>" + this.model.validationError[key] + "</p>");
    }

    return false
  },

  createPost: function() {
    this.inputTitle = this.$('[name="title"]')
    this.inputBody = this.$('[name="body"]')
    
    this.model = this.collection.create({title: this.inputTitle.val(), body: this.inputBody.val()}, {wait: true})
    
    if (this.model.isValid())
    {
      this.inputTitle.val('')
      this.inputBody.val('')
      App.router.navigate(App.router.posts_path(), {trigger: true})
    }
    this.showValidationErrors()

    return false
  }
    
});
