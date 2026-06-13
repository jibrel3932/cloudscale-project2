FROM node:18-alpine
WORKDIR /app
COPY app/ .
RUN npm install --production
EXPOSE 80
CMD ["node", "app.js"]
