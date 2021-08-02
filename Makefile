build:
	cd server && $(MAKE) build

run:
	cd server && $(MAKE) up

stop:
	cd server && $(MAKE) down