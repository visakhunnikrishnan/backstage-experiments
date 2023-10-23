To build the docker image

```
yarn install --frozen-lockfile

# tsc outputs type definitions to dist-types/ in the repo root, which are then consumed by the build
yarn tsc

# Build the backend, which bundles it all up into the packages/backend/dist folder.
# The configuration files here should match the one you use inside the Dockerfile below.
yarn build:backend --config ../../app-config.yaml
```

Build the image

```
docker image build . -f packages/backend/Dockerfile --tag backstage-experiments
```

Run locally with
```
docker run -it -p 7007:7007 \
-e POSTGRES_HOST=host.docker.internal \
-e POSTGRES_PORT=5432 \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=postgres \
backstage-experiments
```

It is also possible to separate backend and frontend into separate images.
So that you can serve fronend with static file serving methods (NGINX).

