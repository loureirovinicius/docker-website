FROM node:latest

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT npm start

EXPOSE ${CONTAINER_PORT}