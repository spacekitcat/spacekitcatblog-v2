FROM node:carbon
WORKDIR /usr/src/app
ADD spacekitcat ./
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT ["npm", "start"]  
