FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
