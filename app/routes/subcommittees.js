import Ember from 'ember';

export default Ember.Route.extend({
   model: function(params) {
     var subcommitteesUrl = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id='+ params.committee_id +
'apikey=85f64358276f4a4f89a4f7795a76effd';
     return Ember.$.getJSON(subcommitteesUrl).then(function(responseJSON) {
        console.log(responseJSON);
       return responseJSON.results;
     });
    }
  });
