const authentication = require('./authentication');
const createUserCreate = require('./creates/create_user.js');
const getPasswordChangeTicketCreate = require('./creates/get_password_change_ticket.js');
const updateUserCreate = require('./creates/update_user.js');
const findUserSearch = require('./searches/find_user.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [createUserCreate.key]: createUserCreate,
    [getPasswordChangeTicketCreate.key]: getPasswordChangeTicketCreate,
    [updateUserCreate.key]: updateUserCreate,
  },
  searches: { [findUserSearch.key]: findUserSearch },
  searchOrCreates: {
    find_user: {
      key: 'find_user',
      display: {
        label: 'Find or Create User',
        description: 'Find a User in Auth0',
      },
      search: 'find_user',
      create: 'create_user',
    },
  },
};
