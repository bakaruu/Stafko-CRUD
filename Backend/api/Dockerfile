FROM node:16

WORKDIR /api

COPY package*.json ./

RUN npm install 

COPY . .
# para windows en casa npm rebuild bcrypt --build-from-source && npm run build

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]