FROM node:12.13.0-alpine

RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn 

COPY . /home/node/app/

EXPOSE 3000

CMD ["yarn", "start"]