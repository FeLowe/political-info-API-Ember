import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
     var billsUrl = 'http://congress.api.sunlightfoundation.com/bills?history.awaiting_signature=true&apikey=85f64358276f4a4f89a4f7795a76effd';
     return Ember.$.getJSON(billsUrl).then(function(responseJSON) {
        console.log(responseJSON);
       return responseJSON.results;
     });
    }
  });
