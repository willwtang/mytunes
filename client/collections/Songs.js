// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      data: 'data',
      success: (data) => {
        this.add(data.results);
        this.trigger('loaded');
      } 
    });
  },

});