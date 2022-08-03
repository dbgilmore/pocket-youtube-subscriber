#!/bin/bash
echo "Fetching new videos"
yt-dlp --no-download https://www.youtube.com/feed/subscriptions --cookies /tmp/cookiejar.txt --download-archive /tmp/archive.txt --date yesterday | grep 'Downloading 1 format' | cut -c8-18 | grep '^[^ ]*$' | awk '{print "https://youtube.com/watch/" $0}' >> /tmp/new.txt
echo "Finished fetching new videos"

echo "Updating archive file"
yt-dlp --no-download https://www.youtube.com/feed/subscriptions --cookies /tmp/cookiejar.txt --download-archive /tmp/archive.txt --datebefore yesterday | grep 'Downloading 1 format' | cut -c8-18 | grep '^[^ ]*$' | awk '{print "youtube " $0}' >> /tmp/archive.txt 
#yt-dlp --no-download https://www/youtube.com/feed/subscriptions --cookies /tmp/cookiejar.txt --download-archive /tmp/archive.txt --datebefore yesterday --force-write-archive --quiet
echo "Finished updating archive file"
