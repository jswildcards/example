FROM node:14-alpine

LABEL maintainer="js.wildcards@gmail.com"

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY ./ ./

EXPOSE 3000
CMD ["node", "index.js"]
