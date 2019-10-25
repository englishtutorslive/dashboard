FROM node:12.13.0-alpine

# RUN npm i -g nodemon
RUN npm install pm2 -g

RUN mkdir /home/node/api

WORKDIR /home/node/api

COPY package.json ./

RUN npm install

COPY . /home/node/api

EXPOSE 8080
# CMD npm start
CMD ["pm2-dev", "ecosystem.config.js"]
