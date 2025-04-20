FROM oven/bun:1 AS base
WORKDIR /app

# install dependencies into temp directory to cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS build
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
RUN bun run build

FROM base
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=build /app/build /app/build
COPY package.json bun.lock .
CMD ["bun", "run", "start"]