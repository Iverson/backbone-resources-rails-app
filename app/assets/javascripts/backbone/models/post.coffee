App.Models.Post = Backbone.Model.extend
	urlRoot: Routes.posts_path()
	
	defaults: {
		title: ""
		body: ""
	}
	
	validation: {
		title:
			required: true
			minLength: 5
		
		body:
			required: true
	}
	
	initialize: ->
