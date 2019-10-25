# ETL - Dasboard

#### How to start with the project

1 - If you want to run it with docker (recomended)
  -- If is your first time runing the project go the `newtwork` folder in your terminal and type `./start.sh`. This will check if you have docker installed, build and run the containers
  -- If is not the first time you run the project you can run this comands in the `network` folder :
     --- `docker-compose build && docker-compose up`
     --- Everytime add a package you will need to run the `build` command

2 - If you want just to work in the `app` project with docker:
  -- Run `docker-compose up app`

3 - If you want just to work in the `app` project without docker:
-- Run `yarn`
-- Run `yarn start`

4 - If you want just to work in the `api` project with docker:
  -- Run `docker-compose up api`

5 - If you want just to work in the `api` project without docker:
-- Run `npm install pm2 -g`
-- Run `npm start`