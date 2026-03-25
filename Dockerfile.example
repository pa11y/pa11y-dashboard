# Example Dockerfile for Pa11y Dashboard
#
# This is a starting point that you can adapt to your infrastructure. It is NOT
# intended to be used as-is.
#
# What this file provides:
#
# - Multi-stage build to keep the final image small
# - All Chromium system dependencies needed by Puppeteer
# - Puppeteer cache handled correctly across build stages
# - Non-root user for running the application and Chromium
#
# What you still need to provide:
#
# - A MongoDB instance (external; NOT included in this image)
# - Runtime configuration via environment variables (see README.md)
#
# Adapt this file to your needs. Common customisations include:
#
# - Adding corporate CA certificates (see commented-out example below)
# - Changing the Node.js or Debian version
# - Using `git clone` instead of `COPY` if your Dockerfile lives in a
#   separate deployment repo (see commented-out alternative below)


# --- Build stage ---
FROM node:24-slim AS build

# Ensure the base image is fully up to date before installing dependencies
RUN apt -qq update && \
    DEBIAN_FRONTEND=noninteractive apt -yqq full-upgrade && \
    DEBIAN_FRONTEND=noninteractive apt -yqq autoremove && \
    rm -rf /var/lib/apt/lists/*

# -- If your organisation uses a corporate proxy or TLS-intercepting CA
#    (e.g. Zscaler), uncomment the following lines and place your CA
#    certificate in the build context:
#
# COPY your-corporate-ca.pem /usr/local/share/ca-certificates/corporate-ca.crt
# RUN apt -qq update && \
#     DEBIAN_FRONTEND=noninteractive apt -yqq --no-install-recommends install \
#     ca-certificates && \
#     update-ca-certificates && \
#     rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy application source into the build context.
# The .dockerignore file excludes dev files, tests, and config files.
COPY . .

# -- Alternative: if your Dockerfile lives in a separate deployment repo
#    (not inside the pa11y-dashboard repo), replace the `COPY . .` above
#    with a git clone. This is useful when your deployment repo only
#    contains infrastructure files (Dockerfile, CI config, manifests).
#
# ARG PA11Y_DASHBOARD_VERSION=main
# RUN apt -qq update && \
#     DEBIAN_FRONTEND=noninteractive apt -yqq --no-install-recommends install \
#     git ca-certificates && \
#     rm -rf /var/lib/apt/lists/*
# RUN git clone --depth 1 --branch ${PA11Y_DASHBOARD_VERSION} \
#     https://github.com/pa11y/pa11y-dashboard.git .

# Install system libraries required by Puppeteer's bundled Chromium binary.
# These must be present at `npm ci` time because Puppeteer downloads and
# validates Chrome during installation.
RUN apt -qq update && \
    DEBIAN_FRONTEND=noninteractive apt -yqq --no-install-recommends install \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Puppeteer downloads Chromium to a cache directory during `npm ci`. By
# default this goes to ~/.cache, which is outside /app and would not survive
# the COPY --from=build in the runtime stage. Setting PUPPETEER_CACHE_DIR
# inside /app ensures the Chromium binary is included in the final image.
ENV PUPPETEER_CACHE_DIR=/app/.cache/puppeteer
RUN npm ci --omit=dev


# --- Runtime stage ---
FROM node:24-slim

# Install the same Chromium system libraries in the runtime stage.
# Only runtime dependencies are needed here (no wget, git, etc.).
RUN apt -qq update && \
    DEBIAN_FRONTEND=noninteractive apt -yqq --no-install-recommends install \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# -- If you added a corporate CA certificate in the build stage, repeat it
#    here so that outbound HTTPS requests at runtime also work:
#
# RUN apt -qq update && \
#     DEBIAN_FRONTEND=noninteractive apt -yqq --no-install-recommends install \
#     ca-certificates && \
#     rm -rf /var/lib/apt/lists/*
# COPY your-corporate-ca.pem /usr/local/share/ca-certificates/corporate-ca.crt
# RUN update-ca-certificates
# ENV NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt

# Run as a non-root user. Chromium will refuse to launch as root without
# --no-sandbox, and running as non-root is good practice regardless.
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser

WORKDIR /app
COPY --from=build /app /app
RUN chown -R pptruser:pptruser /app

USER pptruser

ENV NODE_ENV=production

# Must match the PUPPETEER_CACHE_DIR used in the build stage
ENV PUPPETEER_CACHE_DIR=/app/.cache/puppeteer

EXPOSE 4000

CMD ["node", "index.js"]
