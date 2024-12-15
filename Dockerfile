# 1. Use Node.js as the base image
FROM node:22.5 AS builder

# 2. Set the working directory in the container
WORKDIR /app

# 3. Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code to the working directory
COPY . .

# 6. Build the application
RUN npm run build

# 7. Use a minimal image for serving the application
FROM node:22.5-alpine AS runner

# 8. Set the working directory in the production container
WORKDIR /app

# 9. Copy the build output and necessary files from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
# IMPORTANT: Copy the public directory
COPY --from=builder /app/public ./public

# 10. Install only production dependencies
RUN npm install --production

# 11. Expose the port on which Next.js will run
EXPOSE 3000

# 12. Command to start the application
CMD ["npm", "start"]

