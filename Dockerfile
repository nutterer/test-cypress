FROM node:10.16.0-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json ./

RUN npm install --quiet

COPY . .
