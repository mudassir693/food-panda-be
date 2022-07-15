FROM node:15
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . ./
EXPOSE 5000
CMD ["npm", "start"]