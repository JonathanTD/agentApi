FROM node:10
WORKDIR /usr/src/index.js

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node", "src/index.js" ]