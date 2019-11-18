FROM node:alpine as builder

WORKDIR /code

ADD package.json /code
RUN npm install --production
ADD . /code
RUN npm run build

FROM nginx:alpine

COPY /build /usr/share/nginx/html