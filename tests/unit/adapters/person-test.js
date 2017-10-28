import { moduleFor, test } from 'ember-qunit';
import { manualSetup, mockSetup, mockCreate } from 'ember-data-factory-guy';
import Ember from 'ember';

moduleFor('adapter:person', 'Unit | Adapter | person', {
  integration: true,

  beforeEach() {
    manualSetup(this.container);
    mockSetup(this.container);
  }
});

// Replace this with your real tests.
test('urlForCreateRecord works with mockCreate', async function(assert) {
  mockCreate('person');
  const store = this.container.lookup('service:store');
  const adapter = this.subject();

  // adapter.urlForCreateRecord = function(modelName, snapshot) {
  //   console.log('snapshot is', snapshot);
  //   Ember.assert('record is not available on snapshot', snapshot.record);
  //   return this._super(...arguments);
  // }

  const savedRecord = await Ember.run(() => {
    return store.createRecord('person').save();
  });
  assert.ok(savedRecord);  
});
