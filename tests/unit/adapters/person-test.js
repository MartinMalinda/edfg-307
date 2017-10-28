import { moduleFor, test } from 'ember-qunit';
import FactoryGuy,{ manualSetup, mockSetup, mockCreate } from 'ember-data-factory-guy';
import Ember from 'ember';

moduleFor('adapter:person', 'Unit | Adapter | person', {
  integration: true,

  beforeEach() {
    manualSetup(this.container);
    mockSetup(this.container);
  }
});

test('snapshot has record and adapterOptions in adapter#urlForCreateRecord', async function(assert) {
  mockCreate('person');

  let adapter        = FactoryGuy.store.adapterFor('person'),
      adapterOptions = { name: 'Bob' };

  adapter.urlForCreateRecord = function(modelName, snapshot) {
    assert.ok(snapshot.record, 'the snapshot has record');
    assert.deepEqual(snapshot.adapterOptions, adapterOptions);
    return '/users';
  };

  return await Ember.run(() => {
    return FactoryGuy.store.createRecord('person', { a: 'test' }).save({ adapterOptions });
  });
});