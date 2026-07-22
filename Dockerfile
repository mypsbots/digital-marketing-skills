# Multi-stage build for the Digital Marketing Skills MCP server (HTTP transport).
# --- build stage -------------------------------------------------------------
FROM node:20-alpine AS build
WORKDIR /app

# Install deps without triggering the `prepare` build (no source yet).
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# Build, then drop dev dependencies for a lean runtime.
COPY . .
RUN npm run build && npm prune --omit=dev --ignore-scripts

# --- runtime stage -----------------------------------------------------------
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    DM_MCP_TRANSPORT=http \
    DM_MCP_HTTP_HOST=0.0.0.0 \
    DM_MCP_HTTP_PORT=8080

# Runtime artefacts + bundled data (skills/config/workflows/etc.).
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/skills ./skills
COPY --from=build /app/config ./config
COPY --from=build /app/workflows ./workflows
COPY --from=build /app/templates ./templates
COPY --from=build /app/industries ./industries
COPY --from=build /app/schemas ./schemas
COPY --from=build /app/package.json ./package.json

EXPOSE 8080

# Simple healthcheck against the built-in endpoint.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.DM_MCP_HTTP_PORT||process.env.PORT||8080)+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "dist/server/index.js", "--transport", "http"]
