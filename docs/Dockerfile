# ---------- STAGE 1: Build ----------
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- STAGE 2: Production ----------
FROM node:18-alpine

WORKDIR /app

# Copy only build output + node_modules
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

ENV NITRO_PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
