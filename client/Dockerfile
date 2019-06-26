FROM node:8.12

RUN mkdir -p /usr/app/src
WORKDIR /usr/app/src

COPY package.json package.json
RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run", "startInDocker" ]
