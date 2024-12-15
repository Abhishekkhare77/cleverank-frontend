FROM node:18 AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code, including .env
COPY . .

# Build the application
RUN npm run build

# Use a minimal image to run the app
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only necessary output from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./

RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]
