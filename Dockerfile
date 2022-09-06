FROM node:14-alpine

WORKDIR /movies-challenge

COPY . .

RUN yarn

EXPOSE 5173

CMD ["yarn","dev"]
