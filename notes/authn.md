### AuthN

* backstage should be able to use the same authN as the rest of the app
* does't come with free authz plugin, you need to pay for that
  * but it is worth of checking the authz interface
* to implement basic authn with github, 
  * create an oauth app in github with
    * homepage url: http://localhost:3000
    * callback url: http://localhost:7007/api/auth/github/handler/frame
      * add following snippet to app-config.yml
        * ```agsl
            auth:
            environment: development
            providers:
            github:
            development:
            clientId: 'xxxxxxxxxxxxxxxx'
            clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' 
          ```
        * add the snippet for frontend in `packages/app/src/App.tsx`