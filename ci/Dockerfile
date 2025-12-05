# ---------- STAGE 1: Build ----------
FROM node:24 AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build Nuxt app
RUN npm run build


# ---------- STAGE 2: Production ---------- 
FROM node:24 AS production
WORKDIR /app

# Copy only build output + node_modules
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

ENV NITRO_PORT=3000
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
