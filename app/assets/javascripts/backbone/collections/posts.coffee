App.Collections.Posts = Backbone.Collection.extend
	url: Routes.posts_path()
	model: App.Models.Post
	
	initialize: ->
