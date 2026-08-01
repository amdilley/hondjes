FROM ghcr.io/nubjs/nub:0.6.0

COPY --chown=node:node package.json package-lock.json ./
RUN nub ci

COPY --chown=node:node . .

EXPOSE 8080

CMD ["nub", "run", "start:build"]
