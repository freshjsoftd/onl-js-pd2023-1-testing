ARG VERSION=18-alpine

FROM node:$VERSION

ARG SERVER_PORT=5000

ENV PORT=$SERVER_PORT

RUN mkdir server

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 5500

CMD npm start
