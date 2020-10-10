FROM node:alpine
WORKDIR /server
COPY package.json . 
COPY package-lock.json .
RUN npm i 
COPY index.js . 
CMD ["npm", "start"]