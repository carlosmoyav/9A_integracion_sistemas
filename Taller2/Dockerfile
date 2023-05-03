FROM node:15-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
CMD ng serve --host 0.0.0.0
