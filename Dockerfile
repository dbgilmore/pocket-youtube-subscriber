FROM amazon/aws-lambda-nodejs:12
COPY *.js run.sh cookiejar.txt package*.json ./
RUN npm install
RUN yum install python3-pip -y
RUN pip3 install yt-dlp
CMD [ "index.handler" ]
