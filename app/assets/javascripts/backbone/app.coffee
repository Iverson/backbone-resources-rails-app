window.App = new (Backbone.View.extend
	el: '#app'
	
	Models: {}
	Collections: {}
	Views: {}
	Router: {}

	initialize: ->
		_.bindAll(this, 'start')
	
	start: ->
	    App.router = new App.Router()
	    Backbone.history.start()

	ajaxError: (collection, response) ->
		alert response.statusText
	
	
)

$ ->
	App.start()