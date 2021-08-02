FROM node:14-alpine3.10 as builder

LABEL version="1.0"
LABEL description="Nextjs frontend for Rated-app"

WORKDIR /app

COPY package.json ./ 

RUN npm install

COPY . .

RUN npm run builder

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/shar/nginx/html