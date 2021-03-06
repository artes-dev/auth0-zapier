const perform = (z, bundle) => {
  const options = {
    url: `https://${bundle.authData.domain}/api/v2/users`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
    body: {
      email: bundle.inputData.email,
      given_name: bundle.inputData.given_name,
      family_name: bundle.inputData.family_name,
      name: bundle.inputData.name,
      password: bundle.inputData.password,
      connection: 'Username-Password-Authentication',
      email_verified: true,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'email',
        label: 'Email',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'name',
        label: 'Name',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'given_name',
        label: 'First Name',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'family_name',
        label: 'Last Name',
        type: 'string',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'password',
        label: 'Password',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      created_at: '2021-02-19T03:35:40.771Z',
      email: 'user@example.com',
      email_verified: true,
      family_name: 'Smith',
      given_name: 'John',
      identities: [
        {
          connection: 'Username-Password-Authentication',
          user_id: '602f320c77c8ae007076ff44',
          provider: 'auth0',
          isSocial: false,
        },
      ],
      name: 'Flux Last',
      nickname: 'fluxist+zap',
      picture:
        'https://s.gravatar.com/avatar/34c81dadf51f4987a308736af738730e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjs.png',
      updated_at: '2021-02-19T03:35:40.771Z',
      user_id: 'auth0|602f320c77c8ae007076ff44',
    },
    outputFields: [
      { key: 'created_at' },
      { key: 'email' },
      { key: 'email_verified', type: 'boolean' },
      { key: 'family_name' },
      { key: 'given_name' },
      { key: 'identities[]connection' },
      { key: 'identities[]user_id' },
      { key: 'identities[]provider' },
      { key: 'identities[]isSocial' },
      { key: 'name' },
      { key: 'nickname' },
      { key: 'picture' },
      { key: 'updated_at' },
      { key: 'user_id' },
    ],
  },
  key: 'create_user',
  noun: 'User',
  display: {
    label: 'Create User',
    description: 'Creates a User in Auth0',
    hidden: false,
    important: true,
  },
};
