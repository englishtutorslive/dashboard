FROM node:12.13.0-alpine
RUN npm install -g fauna-shell
COPY .fauna-shell /root
ENTRYPOINT ["tail", "-f", "/dev/null"]