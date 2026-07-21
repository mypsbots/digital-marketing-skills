# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY tsconfig.json ./
COPY src ./src
COPY scripts ./scripts
RUN npm run build

# ---- Runtime stage ----
FROM node:22-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app

# Non-root user
RUN groupadd --system app && useradd --system --gid app --home /app app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/dist ./dist
COPY skills ./skills
COPY workflows ./workflows
COPY resources ./resources
COPY templates ./templates
COPY config ./config
COPY schemas ./schemas

USER app

# Read-only and dry-run safe defaults
ENV DM_MCP_READ_ONLY=true \
    DM_MCP_WRITE_DRY_RUN_DEFAULT=true \
    DM_MCP_REQUIRE_APPROVAL=true \
    DM_MCP_TRANSPORT=stdio

ENTRYPOINT ["node", "dist/server/index.js"]
