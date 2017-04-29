Package.describe({
  name: 'usefulio:sync-methods',
  version: '0.2.0',
  author: 'Ian Serlin <ian@useful.io>',
  summary: 'Adds Meteor.syncMethods that lets you call an asynchonous server method synchronously',
  git: 'https://github.com/usefulio/meteor-sync-methods',
  documentation: 'README.md'
});

Package.onUse(api => {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.use('underscore', 'server')
  api.mainModule('sync-new.js', 'server');
});

Package.onTest(api => {
  api.use('ecmascript');
  api.use('tinytest');
  // api.use('sync-new');
  api.mainModule('sync-new-tests.js');
});
