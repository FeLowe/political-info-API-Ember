import Ember from 'ember';


export default Ember.Route.extend({
 model: function(userZip) {
   var legislatorsUrl = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=85f64358276f4a4f89a4f7795a76effd&zip=' + userZip.zip;
   return Ember.$.getJSON(legislatorsUrl).then(function(responseJSON) {
     console.log(responseJSON);
     return responseJSON.results;
   });
  }
});
