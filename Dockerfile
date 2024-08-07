FROM node:18-alpine AS base

WORKDIR /portfolio

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
