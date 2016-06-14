import Ember from 'ember';


export default Ember.Route.extend({
 model: function() {
   var committeesUrl = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&apikey=85f64358276f4a4f89a4f7795a76effd';
   return Ember.$.getJSON(committeesUrl).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
