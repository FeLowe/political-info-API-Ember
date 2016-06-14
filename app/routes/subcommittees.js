import Ember from 'ember';

export default Ember.Route.extend({
   model: function(params) {
     var subcommitteesUrl = 'http://congress.api.sunlightfoundation.com/committees?committee_id=' + params.committee_id + '&subcommittee=true&apikey=85f64358276f4a4f89a4f7795a76effd';
     return Ember.$.getJSON(subcommitteesUrl).then(function(responseJSON) {
        console.log(responseJSON);
       return responseJSON.results;
     });
    }
  });
