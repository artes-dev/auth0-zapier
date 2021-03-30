# Zapier Integration for Auth0
#### By Robert Testagrossa
Custom [Zapier](https://zapier.com) Integration for [Auth0](https://auth0.com). Currently includes Actions for *Find*, *Create*, and *Update* Users and *Create Password Reset Link*.

## Installation
Currently in Invite-only mode. Invite link available [here](https://zapier.com/developer/public-invite/130524/6cc6406149d544d83ebdaf7969ac97dd/)

## Setup
1. Enable the following permissions (scopes) at [Auth0 Management Dashboard](https://manage.auth0.com/dashboard) -> APIs -> Machine-to-Machine Setting:
````
read:users
update:users
create:users
create:user_tickets
read:tenant_settings
````
2. Get `Client ID`, `Client Secret` and `Domain` from [Auth0 Management Dashboard](https://manage.auth0.com/dashboard) -> Applications -> Settings.
