# Start from the official Node.js image
FROM node:20-alpine

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
