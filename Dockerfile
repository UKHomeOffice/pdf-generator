FROM digitalpatterns/node:latest AS build

COPY . /src

WORKDIR /src


RUN npm install
RUN npm run build-ts

RUN npm prune --production

FROM digitalpatterns/node:latest

WORKDIR /app
RUN mkdir -p /app


COPY --from=build /src/node_modules node_modules
COPY --from=build /src/dist dist

RUN chown -R node:node /app

ENV NODE_ENV='production'

USER 1000

EXPOSE 8080

ENTRYPOINT exec node dist/bootstrap.js

