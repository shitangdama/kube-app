FROM node:alpine as builder

WORKDIR /code

ADD package.json /code
RUN npm install --production
ADD . /code
RUN npm run build

FROM nginx:alpine

COPY --from=builder /code/build /usr/share/nginx/html
COPY --from=builder /code/default.conf /etc/nginx/conf.d/default.conf