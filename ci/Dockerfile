FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS production
 
WORKDIR /app

COPY --from=builder /app/.output /app/.output
ENV MONGO_URI=mongodb://ntdotjsx:ntdotjsx@mongodb:27017
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
