FROM node:14-alpine

WORKDIR /movies-challenge

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn","dev"]
