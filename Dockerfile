# # Use an official Node.js runtime as a parent image
# FROM node:14-alpine

# # Set the working directory to /app
# WORKDIR /app


# # Install dependencies
# RUN npm install 

# # Copy the build folder to the container
# COPY . .

# # Expose port 3000 for the app to listen on
# EXPOSE 3000

# # Start the app
# CMD ["npm", "start"]


# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app


COPY package*.json ./ 

# Install dependencies
RUN npm install

# Install serve package globally


# Copy the build folder to the container
COPY . .

# Expose port 3000 for the app to listen on
EXPOSE 3000

# Start the app
CMD ["npm","start"]
