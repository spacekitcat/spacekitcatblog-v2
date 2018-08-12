FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD spacekitcat-gatsby /usr/src/app/
RUN npm install
RUN npm run build

EXPOSE 3000
ENTRYPOINT ["npm", "start"]  
