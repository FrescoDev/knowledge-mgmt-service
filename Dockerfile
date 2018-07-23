FROM mhart/alpine-node:8
ENV NODE_ENV=production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn --ignore-engines --pure-lockfile

# Add your source files
COPY src/ src/
COPY main.js main.js
COPY server.js server.js

EXPOSE 80

CMD ["yarn","start"]
