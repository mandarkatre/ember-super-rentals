import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  // create a nested route, so that details of individual item can be shown there
  this.route('rentals', function() {
      this.route("rental", { path: ":rental_id" });
  });
});

export default Router;
