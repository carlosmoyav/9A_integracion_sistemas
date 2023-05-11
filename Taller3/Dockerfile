FROM node:19

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run test

CMD ["node", "index.js"]