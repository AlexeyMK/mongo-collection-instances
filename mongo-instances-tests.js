Tinytest.add('basic - works', function (test) {
  Test = new Mongo.Collection('test' + test.id);
  Test.insert({ test: true });
  var find = CollectionWatcher.get('test' + test.id).find({ test: true });
  test.equal(find.count(), 1);
});
