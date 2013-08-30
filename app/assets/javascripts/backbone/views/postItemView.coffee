App.Views.PostItem = Backbone.View.extend
	events: {
		'click .js-destroy': 'destroy'
	}
	
	template: JST["backbone/templates/posts/_post"]
	
	initialize: ->
	
	render: ->
		@.$el.empty().append( @template(this.model.attributes) )
		@
	
	destroy: ->
		this.model.destroy()
		@.$el.remove()
		return false
	
