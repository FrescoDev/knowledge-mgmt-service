## fact-find-management-service

provides a restful interface for the mgmt of a subject's fact find i.e. to store and retrieve a client's gathered facts.

## INSTALLATION

### Using Docker (recommended)

- Run ```make install``` to install the required packages. (see Makefile for details)

### Using Yarn

- Run ```yarn install --ignore-engines --pure-lockfile``` to install the required packages.

## DEVELOPMENT

### Using Docker

- Run ```make dev``` to run the app. (see Makefile for details.) This will run the app within the docker container specified via the docker-compose.yml/Dockerfile.

- Default port: 3000
- URL: http://localhost:3000/

Default endpoints:

- HEALTH: http://localhost:3000/health

Environment variables are set in the docker-compose.yml file for the dev container.

### Mocking external dependencies

The dyson stub framework is configured to allow the management, and creation of mocked responses to http calls.
This is already configured to be running, and does not to be manually started, to add a stub endpoint simply add your response file to the dyson>stubs directory e.g. the ping.js file mocks out all calls to: http://stubs/ping with method GET with reponse:

```{ res: 'ok }```

### endpoints

* Save a fact find: POST /fact-find/v1/save
The body of the JSON submitted to this point will be saved as the client's facts.

* Retrieve a fact find: GET /fact-find?factFindId=someId
Retrieve a client's fact by fact find ID. 

### Using Yarn

- Create a .env file locally (at root of the app directory) and specify the required environment variables.
- E.g.
```
BASE_PATH=/fact-find-management-service
PORT=3000
MONGODB_URL=mongodb://mongodb:27017
```
- Run ```yarn run dev``` to run the app.

- Default port: [set in .env file]
- URL: http://localhost:3000/

Default endpoints:

- HEALTH: http://localhost:PORT/health

* Logging is provided via bunyan, optionally you can use the Bunyan CLI (requires global install) to provided formatted logging output. 

## TESTING

- Run ```yarn run test:unit``` to run all the unit tests. Alternatievly, run ```make unit-test``` to run the unit tests via docker, useful before pushing up to build server.

- Run ```yarn run  test:component``` to run all the component tests. Alternatievly, run ```make component-test``` to run the component tests same as above via docker. 

- Other useful commands
```
make all // runs everything via docker. See Makefile for details.
yarn dependency-check // scan depenedencies for known vulnerabilities
yarn lint // scans code base and checks lint rules are met 
```

## USEFUL LINKS

## USEFUL DOCUMENTATION
