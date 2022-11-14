FROM node

USER ROOT
WORKDIR /home
RUN git clone https://github.com/hhy/mycicd.git  app
WORKDIR /home/app
RUN npm install && npm start