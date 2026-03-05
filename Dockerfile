# Use an official Node.js runtime as a parent image
FROM node:lts-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

RUN apk update
RUN apk add --no-cache bash chromium

# Set the working directory in the container
WORKDIR /app

# Initialise app
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 4000

# Run the application
CMD ["node", "index.js"]
