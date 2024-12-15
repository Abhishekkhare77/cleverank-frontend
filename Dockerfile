# Use Node.js LTS as the base image
FROM node:18 as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lightweight Node.js image for the final production image
FROM node:18-slim

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app ./

# Install production dependencies only
RUN npm install --omit=dev

# Expose the port Next.js runs on
EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "start"]
