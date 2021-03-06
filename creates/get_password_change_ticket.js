module.exports = {
  operation: {
    perform: {
      url: 'https://{{bundle.authData.domain}}/api/v2/tickets/password-change',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer {{bundle.authData.access_token}}',
      },
      body: {
        client_id: '{{bundle.authData.client_id}}',
        user_id: '{{bundle.inputData.user_id}}',
      },
      removeMissingValuesFrom: {},
    },
    inputFields: [
      {
        key: 'user_id',
        label: 'User Id',
        type: 'string',
        helpText: 'auth0|xxxxxxxxxxxxxxxxxxxx',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      ticket:
        'https://auth.snctm.com/u/reset-password?ticket=oTyRiP9PYCD8u2bUvAw7krTSIPtUUU8#',
    },
    outputFields: [{ key: 'ticket_url', label: 'Ticket URL' }],
  },
  key: 'get_password_change_ticket',
  noun: 'Ticket',
  display: {
    label: 'Get Password Change Ticket',
    description:
      'Gets a password reset link for the specified user. Requires scope: "create:user_tickets"',
    hidden: false,
    important: true,
  },
};
