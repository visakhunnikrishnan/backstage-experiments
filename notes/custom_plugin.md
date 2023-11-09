
### Create custom plugin

Update all plugins
```agsl
yarn backstage-cli versions:bump
```
create the custom plugin
```agsl
yarn new --select plugin
```
enter the app name (say `my-plugin`)

```agsl
yarn dev or yarn start
```
now goto `http://localhost:3000/my-plugin` to access the plugin
