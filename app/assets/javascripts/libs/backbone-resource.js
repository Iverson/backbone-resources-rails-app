var Resource = (function(Backbone, _) {
  
  
  // Local private variables
  var Resource    = {},
      views       = {},
      actionsMap  = {
        index : '_resource_',
         show : '_resource_/:id',
          new : '_resource_/new',
         edit : '_resource_/:id/edit',
      };
  
  
  // Resource.Router
  // ------------------------
  //
  // Support declarated resource GET-method routes (index, show, new, edit) and bind it for special Resource.View.
  
  Resource.Router = Backbone.Router.extend({
    
    constructor : function (options) {
        
        Backbone.Router.prototype.constructor.apply(this, arguments);
        
        for (name in this.resources) {
          this._createResourceRoutes(name);
        }

    },
    
    _resource: function() {
      var route  = Backbone.history.fragment;
          params = route.split("/"),
          name   = params[0],
          view   = this.resources[name];

      if (arguments.length > 0)
      {
        params[1] = ':id'
      }

      var routeMask = params.join('/').replace(name, '_resource_'),
          action = _.invert(actionsMap)[routeMask];

      views[name] = views[name] || new view()
      views[name].action(action, {id: arguments[0]})

    },

    _createResourceRoutes: function(name) {
      for (key in actionsMap) {
        var actionRoute = actionsMap[key].replace('_resource_', name);
        this.route(actionRoute, '_resource');
      }

      this._createRoutesHelpers(name);
    },

    _createRoutesHelpers: function(name, action) {
      var actionRoute = actionsMap[key].replace('_resource_', name),
          that        = this,
          itemName    = name.slice(0,-1);
      
      // Index
      this[name + '_path'] = function()
      {
        return '#' + actionsMap.index.replace('_resource_', name);
      }
      
      // New
      this['new_' + itemName + '_path'] = function()
      {
        return '#' + actionsMap.new.replace('_resource_', name);
      }
      
      // Show
      this[itemName + '_path'] = function(id)
      {
        return '#' + actionsMap.show.replace('_resource_', name).replace(':id', id);
      }
      
      // Edit
      this['edit_' + itemName + '_path'] = function(id)
      {
        return '#' + actionsMap.edit.replace('_resource_', name).replace(':id', id);
      }
    }
    
  });
  
  // Resource.View
  // ------------------------
  //
  // Support declarated resource GET-method routes (index, show, new, edit) and bind it for special Resource.View.
  
  Resource.View = Backbone.View.extend({
    
    action: function(action, params) {
      this.template = JST[this.templatesPath + "/" + action]
      this.params   = params

      this[action](params)

      if (!this.rendered && this.template)
      {
        this.render();
      }
      this.rendered = false;
    },
    
    render: function(params) {
      this.$el.empty().append(this.template(params));
      this.rendered = true;
      return this;
    },
    
    skipRender: function() {
      this.rendered = true;
    }
    
  });
  
  return Resource;
  
})(Backbone, _);