import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('legislators', {path: '/legislators/:zip'});
  this.route('committees');
  // this.route('committees', {path: '/subcommittees/committee_id'});
  this.route('subcommittees');
});

export default Router;