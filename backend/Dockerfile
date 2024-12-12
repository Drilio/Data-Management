# Base image
FROM node:20-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy application code (excluding what's defined in .dockerignore)
COPY . .

# Install serve to render index.html in ENV=PROD
RUN npm install --global serve

# Build the application
RUN npm run build

EXPOSE 4000

# Command to run the application
ENTRYPOINT ["sh","/app/entrypoint.sh"]
