FROM node:latest

COPY . /app

WORKDIR /app

VOLUME /app/node_modules

RUN npm install

ENTRYPOINT npm start

EXPOSE ${CONTAINER_PORT}