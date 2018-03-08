FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD spacekitcat /usr/src/app/
RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm", "start"]  
