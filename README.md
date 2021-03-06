#Zapier Integration for Auth0
####By Robert Testagrossa
Custom Zapier Integration for Auth0. Currently includes Actions for *Find*, *Create*, and *Update* Users and *Create Password Reset Link*.

##Installation
Currently in Invite-only mode. Invite link available [here](https://zapier.com/developer/public-invite/127330/cfda4324508cf0236900edc8a64704df/)

##Setup
1. Get `Client ID`, `Client Secret` and `Domain` from [Auth0 Management Dashboard](https://manage.auth0.com/dashboard) -> Applications -> Settings.
2. Enable the following permissions (scopes) at [Auth0 Management Dashboard](https://manage.auth0.com/dashboard) -> APIs -> Machine-to-Machine Setting:
````
read:users
update:users
create:users
create:user_tickets
read:tenant_settings
````
