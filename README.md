# Covid 19  API

## Prerequisites
- Install docker-compose/docker
- Install node js(if have not installed)
- Install nvm

## Development configuration
- Go to your config folder in your root.
- Change mongo host in dev.json file to 'localhost; or to your ip address
- ex - "mongodb": {
            //"host": "192.168.43.235",
            "host": "localhost",
            "port": 27022,
            "name": "covid_19"
        }

## Select Node Js version
- nvm use

## Install dependency
- docker-compose run --service-ports --rm sc_node yarn install

## Seeds
- docker-compose run --service-ports --rm sc_node yarn seed:dev

## How run on local
- docker-compose run --service-ports --rm sc_node yarn server:dev

## How run unit tests
- docker-compose run --service-ports --rm sc_node yarn test
