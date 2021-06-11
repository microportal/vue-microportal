# build
FROM node:14-alpine as builder
COPY . /app
WORKDIR /app
RUN alias python="python3" \
    && npm i \
    && npm run build

# dist
FROM nginx:stable-alpine as dist

RUN rm -rf /usr/share/nginx/html/* \
    && mkdir -p /usr/share/nginx/html/js
COPY --from=builder /app/dist/ /usr/share/nginx/html/
COPY --from=builder /app/conf/importmap.json /usr/share/nginx/html/importmap.json
COPY --from=builder /app/conf/nginx.conf /etc/nginx/nginx.conf
