# Use official Node.js image
FROM node:22

# Create app directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies (if package.json exists)
RUN npm install || true

# Run app
CMD ["node", "rps-game.js"]
