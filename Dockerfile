FROM node:12.19-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]