# Stage 1: Build the application
FROM node:18-alpine AS build  
RUN apk update && apk add --no-cache bash


WORKDIR /george_monday_coding_assignment_12

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy built files from the build stage  dist
COPY --from=build /george_monday_coding_assignment_12/dist /usr/share/nginx/html

# Verify that the files are copied correctly
RUN ls -l /usr/share/nginx/html

# Expose port 8083 for Nginx
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
