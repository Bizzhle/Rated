FROM node:15

LABEL version="1.0"
LABEL description="Production image for Rated app"

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
