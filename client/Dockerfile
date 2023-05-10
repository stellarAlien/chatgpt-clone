# docker file for react app
# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use nginx as the web server to serve the built files
FROM nginx:stable-alpine

# Copy the build folder from the previous stage to the nginx HTML folder
COPY --from=0 /app/dist /usr/share/nginx/html

# Copy the _redirects file to the nginx configuration folder
COPY public/_redirects /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]

