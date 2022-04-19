FROM node:17-alpine3.14

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["node", "src/server.js"]
EXPOSE 5000
