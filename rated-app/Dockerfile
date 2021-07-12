FROM node

WORKDIR /app

COPY package.json . 
# installs all dependencies
RUN npm install
COPY . .

EXPOSE 3005
CMD ["npm", "run", "dev"]