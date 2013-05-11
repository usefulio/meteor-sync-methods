Package.describe({
  summary: "Adds Meteor.syncMethods that lets you call an asynchonous server method synchronously"
});

// Npm.depends({fibers: '1.0.0'});

Package.on_use(function (api) {
  api.use('underscore', 'server');
  api.add_files('sync_methods.js', 'server');
});