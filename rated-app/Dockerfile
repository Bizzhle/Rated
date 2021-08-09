FROM node:14 as builder

LABEL description="Nextjs frontend for Rated-app"
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]

# FROM nginx
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]
