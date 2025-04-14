# Use the official Node.js image as a base
FROM node:22.13.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application into the container
COPY . .

# Build the app for production
RUN npm run build

# Expose the port your Vite app runs on (default is 3000)
EXPOSE 5173

# Serve the production build using a lightweight HTTP server
CMD ["npx", "serve", "-s", "dist", "-l", "5173"]
