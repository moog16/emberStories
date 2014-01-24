App.StoryController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    editStory: function() {
      this.set('isEditing', true);
    },
    saveStory: function() {
      this.get('model').save();
      this.set('isEditing', false);
    }
  }
});
