FROM amazon/aws-lambda-nodejs:12
COPY *.js run.sh cookiejar.txt package*.json ./
RUN npm install
RUN yum -y install glibc fontconfig freetype freetype-devel fontconfig-devel wget bzip2 tar
RUN wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
RUN tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 -C /usr/local/share
RUN yum install python3-pip -y
RUN pip3 install yt-dlp
CMD [ "index.handler" ]
