FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD spacekitcat-react /usr/src/app/
RUN npm install
RUN npm run build
RUN npm run deploy-storybook -- --ci

EXPOSE 5000
ENTRYPOINT ["npx", "serve", "-s", "build"]  
