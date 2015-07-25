# faker.js wraped for Meteor 
[![Build Status](https://travis-ci.org/girassolbit/meteor-fakefill.svg?branch=master)](https://travis-ci.org/girassolbit/meteor-fakefill)

You can use `faker` both client and server side

See faker documentation at [https://github.com/Marak/faker.js](https://github.com/Marak/faker.js)

### Added methods for Meteor apps development
We take the freedom to add some additional methods that may be useful for you

### faker.meteor.user
Returns a simple user

```js
var user = faker.meteor.user();
=> { username, emails: [{ adress: '...' }], profile: { name: '...' } }
```