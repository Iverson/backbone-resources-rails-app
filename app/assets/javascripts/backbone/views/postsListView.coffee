App.Views.PostsList = Backbone.View.extend
	el: "#posts"
	
	initialize: ->
		_.bindAll(this)
		this.collection.on('reset', this.addAll)
		this.collection.on('add', this.addOne)
	
	addAll: ->
	  
		@.$el.empty()
		this.collection.models.forEach(this.addOne)
	
	addOne: (model)->
		item = new App.Views.PostItem({model: model})
		@.$el.append(item.render().el)
	