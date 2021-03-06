module.exports = {
  type: 'session',
  test: {
    url: 'https://{{bundle.authData.domain}}/api/v2/tenants/settings',
    method: 'GET',
    params: {
      client_id: '{{bundle.authData.client_id}}',
      domain: '{{bundle.authData.domain}}',
      client_secret: '{{bundle.authData.client_secret}}',
    },
    headers: {
      authorization: 'Bearer {{bundle.authData.access_token}}',
      'X-CLIENT-ID': '{{bundle.authData.client_id}}',
      'X-DOMAIN': '{{bundle.authData.domain}}',
      'X-CLIENT-SECRET': '{{bundle.authData.client_secret}}',
    },
    body: {},
    removeMissingValuesFrom: {},
  },
  fields: [
    {
      computed: false,
      key: 'client_id',
      required: true,
      label: 'Client ID',
      helpText:
        'Go to the [Auth0 Dashboard](https://manage.auth0.com/dashboard/) and select your Application, then copy "Client ID".',
    },
    {
      computed: false,
      key: 'domain',
      required: true,
      label: 'Domain',
      helpText:
        'Go to the [Auth0 Dashboard](https://manage.auth0.com/dashboard/) and select your Application, then copy "Domain". *Ex: mysite.auth0.com*',
      type: 'string',
      inputFormat: ' https://{{input}}/',
    },
    {
      computed: false,
      key: 'client_secret',
      required: true,
      label: 'client_secret',
      helpText:
        'Go to the [Auth0 Dashboard](https://manage.auth0.com/dashboard/) and select your Application, then copy "Client Secret".',
      type: 'password',
    },
  ],
  sessionConfig: {
    perform: {
      url: 'https://{{bundle.authData.domain}}/oauth/token',
      method: 'POST',
      params: {},
      headers: { 'content-type': 'application/json' },
      body: {
        client_id: '{{bundle.authData.client_id}}',
        client_secret: '{{bundle.authData.client_secret}}',
        audience: 'https://{{bundle.authData.domain}}/api/v2/',
        grant_type: 'client_credentials',
      },
      removeMissingValuesFrom: {},
    },
  },
  connectionLabel: '{{bundle.inputData.friendly_name}}',
};
