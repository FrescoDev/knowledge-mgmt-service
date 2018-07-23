NODE_ENV ?= development
DOCKER_COMPOSE ?= docker-compose
DOCKER_RUN ?= ${DOCKER_COMPOSE} run --rm
DOCKER_BASE_IMAGE = node
YARN ?= ${DOCKER_RUN} -e NODE_ENV=${NODE_ENV} ${DOCKER_BASE_IMAGE} yarn

all: clean-up install lint unit-test component-test

install:
	${YARN} install --ignore-engines --pure-lockfile
.PHONY: install

lint:
	${YARN} run lint
.PHONY: lint

unit-test:
	${DOCKER_RUN} unit-test
.PHONY: unit-test

component-test:
	${DOCKER_COMPOSE} down -v
	${DOCKER_RUN} component-test
.PHONY: component-test

dependency-check:
	${YARN} run dependency-check
.PHONY: dependency-check

release:
	@npm version patch
.PHONY: release

clean-up:
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} down -v || true
.PHONY: clean-up

dev:
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} down -v || true
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} up dev
.PHONY: dev

publish-tunnel:
	Make clean-up
	${DOCKER_COMPOSE} up -d publish-tunnel
	open http://localhost:3009
.PHONY: publish-tunnel
