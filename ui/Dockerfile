FROM node:lts-alpine3.14

RUN mkdir ui

WORKDIR /ui 

COPY package.json /ui/package.json

RUN npm i

COPY . /ui

CMD ["npm", "run", "dev"]