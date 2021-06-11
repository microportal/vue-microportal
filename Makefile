STACK_NAME="mp"

bootstrap:
	lerna bootstrap

run:
	lerna run serve

docker-build:
	docker-compose -p ${STACK_NAME} build

docker-start:
	docker-compose -p ${STACK_NAME} up -d --remove-orphans

docker-stop:
	docker-compose -p ${STACK_NAME} stop

docker-down:
	docker-compose -p ${STACK_NAME} down -v
