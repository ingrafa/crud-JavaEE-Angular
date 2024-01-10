# FROM nginx:1.17.1-alpine as builder
FROM node:latest as builder
COPY /dist/taller-angular /usr/share/nginx/html
# WORKDIR /src/app
COPY package.json package.json
RUN mkdir -p /app

WORKDIR /app

RUN npm install
COPY . .
RUN npm run build --prod

# CMD ["npm", "start"]

FROM nginx:1.17.1-alpine
COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf
COPY --from=builder app/dist/taller-angular usr/share/nginx/html
