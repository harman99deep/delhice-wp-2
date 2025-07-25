# Use Node image with your desired version
FROM node:22-alpine

# Create app directory inside the container
WORKDIR /app

# Copy only the package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Set environment variable for port
ENV PORT=5173

# Expose the app port
EXPOSE 5173

# Run the development script
CMD ["npm", "run", "dev"]
