#!/usr/bin/env bash
STACK_NAME="microportal"
case "$1" in
    start)
        echo "Starting ${STACK_NAME} stack"
        docker-compose -p ${STACK_NAME} up -d --remove-orphans
        ;;
    stop)
        echo "Stopping ${STACK_NAME} stack"
        docker-compose -p ${STACK_NAME} stop
        ;;
    restart)
        echo "Restarting ${STACK_NAME} stack"
        docker-compose -p ${STACK_NAME} restart
        ;;
    clean)
        echo "Cleaning ${STACK_NAME} stack"
        docker-compose -p ${STACK_NAME} down -v
        ;;
    build)
        echo "Building images"
        docker-compose build $2
        ;;
    *)
        echo "Accepted commands: start, stop, restart, clean or build"
        ;;
esac