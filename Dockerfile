FROM node:14-slim

WORKDIR /home/axel/axelt/Estudos/ProjetoReact/frontend

COPY ./package.json ./
COPY ./package-lock.json ./

RUN apt-get update && apt-get install -y curl
RUN curl --silent --location https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y \
  nodejs
RUN echo "Node: " && node -v
RUN echo "NPM: " && npm -v
RUN npm i --save

COPY . .

EXPOSE 3000

CMD ["npm", 'start']