import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  }

  // jquery ajax call can be done, but using store and adapter pattern gives
  // the benefit of talking to different types of servers without
  // writing any networking code

  // model() {
  //   return $.getJSON('http://localhost:3001/rentals');
  // }
});
