#!/bin/bash
#docker rmi -f $(docker images --format "{{.ID}}")
IS_DOCKER="$(mdfind "kMDItemKind == 'Application'" | grep 'Docker')"
DOCKER_PATH="/Applications/Docker.app"

if [ ${IS_DOCKER} = ${DOCKER_PATH} ]; then
   echo '👍 you have docker installed'
   echo 'Building containers...🔨'
   docker-compose build
   echo 'Running containers....🚀'
   docker-compose up
else
   brew cask install docker
fi
  
