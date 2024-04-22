FROM node:16

WORKDIR /api

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

RUN npm rebuild bcrypt --build-from-source && npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]