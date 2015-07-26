Package.describe({
  name: 'gbit:faker',
  version: '0.0.3',
  summary: 'Wraps faker.js to Meteor',
  git: 'https://github.com/girassolbit/meteor-faker',
  documentation: 'README.md'
});

Npm.depends({
  faker: '3.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.addFiles('lib/faker.js', 'server');
  
  api.addFiles('.npm/package/node_modules/faker/build/build/faker.js', 'client');
  api.addFiles('lib/faker-client.js', 'client');

  api.export('faker', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gbit:faker');

  api.addFiles('.npm/package/node_modules/faker/build/build/faker.js', 'client');
  
  api.addFiles('tests/faker-tests.js');
});
