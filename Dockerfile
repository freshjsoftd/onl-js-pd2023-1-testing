ARG VERSION=18-alpine

FROM node:$VERSION

ARG SERVER_PORT=5000

ENV PORT=$SERVER_PORT

RUN mkdir server

WORKDIR /server

COPY . .

RUN ["npm", "install"]

# RUN npm install

EXPOSE $SERVER_PORT

ENTRYPOINT ["echo"]

CMD ["Hi"]

# CMD npm start

# CMD ["npm", "start"]
