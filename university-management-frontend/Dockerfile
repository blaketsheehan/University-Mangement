# Use an official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install
RUN apt-get update && apt-get install -y xdg-utils

# Copy the rest of the application code
COPY . .

# Expose the React development server's port
EXPOSE 3000

# Run the development server
CMD ["npm", "start"]