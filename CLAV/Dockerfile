FROM node:21.7

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "preview"]

EXPOSE 4173
