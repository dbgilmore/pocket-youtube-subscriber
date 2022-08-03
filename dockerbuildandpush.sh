#!/bin/bash

AWS_ACCOUNT_ID=$1
docker build -t pocket-youtube-subscriber .

docker tag pocket-youtube-subscriber:latest $AWS_ACCOUNT_ID.dkr.ecr.eu-west-2.amazonaws.com/pocket-youtube-subscriber:latest

aws ecr get-login-password | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.eu-west-2.amazonaws.com

docker push $AWS_ACCOUNT_ID.dkr.ecr.eu-west-2.amazonaws.com/pocket-youtube-subscriber:latest

aws lambda update-function-code --function-name containeryeeter --image-uri $AWS_ACCOUNT_ID.dkr.ecr.eu-west-2.amazonaws.com/pocket-youtube-subscriber:latest
