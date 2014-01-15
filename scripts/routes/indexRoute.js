App.IndexRoute = Ember.Route.extend({
  model : function(){
    return this.get('store').findAll('story');
  }
});