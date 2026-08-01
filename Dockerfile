FROM node:26-slim
RUN npm install -g @nubjs/nub

WORKDIR /app

COPY . .

RUN nub ci
RUN nub run build

EXPOSE 8080

CMD ["nub", "run", "start"]
