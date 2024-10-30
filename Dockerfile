# FROM node:18.20-alpine
# WORKDIR /app
# COPY package*.json .
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]


FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000