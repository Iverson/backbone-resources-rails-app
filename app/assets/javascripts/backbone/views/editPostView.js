App.Views.PostEditForm = Backbone.View.extend({
  el: "#app",
  
  events: {
	  'click .js-editPost'  : 'editPost'
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

  editPost: function() {
    this.inputTitle = this.$('[name="title"]')
    this.inputBody = this.$('[name="body"]')
    
    this.model.save({title: this.inputTitle.val(), body: this.inputBody.val()}, {wait: true})
    
    if (this.model.isValid())
    {
      App.router.navigate(App.router.post_path(this.model.get('id')), {trigger: true})
    }
      
    this.showValidationErrors()

    return false
  }
    
});
