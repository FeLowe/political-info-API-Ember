import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save3ZipLookupRoute(userZip) {
      this.transitionTo('legislators', userZip.zip);
    }
  }
});
