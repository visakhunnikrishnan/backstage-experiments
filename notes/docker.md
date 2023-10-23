To build the docker image

```
yarn install --frozen-lockfile
yarn tsc
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

