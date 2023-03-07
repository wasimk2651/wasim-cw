FROM node:latest 

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 3250

CMD ["npm", "run", "start" ] 
#docker build -t cw1 .
#used to build the docker

# docker run -d -p 3250:3250 cw1
# this code runs the docker and -d runs it
# in the back so the termianl is usable

# -p binds the dockers port '3250' to the local hosts