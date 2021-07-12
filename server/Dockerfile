# specify the node base image with your desired version node:<version>
FROM node:15
# specify working directory - recommended
WORKDIR /app 
# compies the /app // specify working directory - recommended
COPY package.json . 
# installs all dependencies
RUN npm install

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

# copies ever file in the directory into the /app
COPY . ./

EXPOSE 5000
CMD ["node", "./bin/www"]