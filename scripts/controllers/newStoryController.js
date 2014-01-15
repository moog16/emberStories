App.NewstoryController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var url = $('#url').val();
      var tags = $('#tags').val();
      var fullname = $('#fullname').val();
      var title = $('#title').val();
      var excerpt = $('#excerpt').val();
      var submittedOn = new Date();
      var store = this.get('store');
      var story = store.createRecord('story',{
        url: url,
        tags: tags,
        fullname: fullname,
        title: title,
        excerpt: excerpt,
        submittedOn: submittedOn
      });
      story.save();
      this.transitionToRoute('index');
    }
  }
});