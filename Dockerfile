# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Change permissions for the bin folder and files
RUN chmod -R +x bin/

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["node", "src/000.js"]
