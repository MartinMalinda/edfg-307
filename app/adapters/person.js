import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    console.log('snapshot is', snapshot);
    Ember.assert('record is not available on snapshot', snapshot.record);
    return this._super(...arguments);
  },
});
