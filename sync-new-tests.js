// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by sync-new.js.
import { name as packageName } from "meteor/sync-new";

// Write your tests here!
// Here is an example.
Tinytest.add('sync-new - example', function (test) {
  test.equal(packageName, "sync-new");
});
