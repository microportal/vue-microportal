# build
FROM node:alpine as builder
COPY . /app
WORKDIR /app
RUN npm i \
    && npm run build

# dist
FROM nginx:stable-alpine as dist

RUN rm -rf /usr/share/nginx/html/* \
    && mkdir -p /usr/share/nginx/html/js
COPY --from=builder /app/dist/js/app.js /usr/share/nginx/html/js/app.js
COPY --from=builder /app/conf/nginx.conf /etc/nginx/nginx.conf
