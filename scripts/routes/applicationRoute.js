App.Router.map(function() {
  this.resource('index', {path: '/'}, function() {
    this.resource('story', {path: '/stories/:story_id'}, function() {
    });
  })
  this.resource('newstory', {path: 'story/new'});
});