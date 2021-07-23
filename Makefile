run:
	cd server && $(MAKE) run
	cd rated-app && $(MAKE) run

stop:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml down