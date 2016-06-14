import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1ZipLookup(){
      var userZip = {
        zip: this.get('zip')
      };
      this.sendAction('save2ZipLookupComponent', userZip);
    }
  }
});
