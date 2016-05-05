// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  template: _.template('<div class="songQueueBit">\
                          <div class="artist"><%- artist %></div> \
                          <div class="song"><%- title %></div> \
                        </div>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
                        
});
