# Build stage
FROM node:20-slim AS builder

# Enable Corepack and prepare Yarn
USER root
RUN corepack enable && corepack prepare yarn@stable --activate

# Set environment variables and create app directory
ENV NODE_ENV=production
ENV APP_HOME=/opt/node/app
RUN mkdir -p $APP_HOME && chown -R node:node $APP_HOME

# Switch to non-root user
USER node:node
WORKDIR $APP_HOME

# Set variable to skip husky installation
ENV HUSKY_SKIP_INSTALL=1

# Copy package files and install dependencies
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=false

# Copy the rest of the app and build it
COPY --chown=node:node . .
RUN yarn build

# Production stage
FROM node:20-slim

# Install any required OS-level dependencies
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

USER root
RUN corepack enable && corepack prepare yarn@stable --activate

ENV NODE_ENV=production
ENV APP_HOME=/opt/node/app
RUN mkdir -p $APP_HOME && chown -R node:node $APP_HOME

USER node:node
WORKDIR $APP_HOME

ENV HUSKY_SKIP_INSTALL=1

# Copy package files and install production dependencies
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=false && yarn cache clean

# Copy built files from the builder stage
# Change this if your build output folder is different
COPY --from=builder --chown=node:node $APP_HOME/.next ./.next

# Expose necessary port
EXPOSE 3000

# Use JSON syntax for CMD
CMD ["yarn", "start"]
