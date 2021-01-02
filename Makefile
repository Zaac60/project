# -- Setup ——
SHELL         = bash
PROJECT       = app
EXEC_PHP      = php -d memory_limit=-1
SYMFONY       = $(EXEC_PHP) bin/console
COMPOSER      = composer
GIT           = git
GULP          = gulp
YARN          = yarn
DOCKER        = docker-compose
DOCKER_COMPOSE= $$( if [ -f docker/docker-compose.local.yml ]; then \
		echo docker/docker-compose.local.yml; \
	else \
		echo docker/docker-compose.yml; \
	fi )
.DEFAULT_GOAL = help

.PHONY: assets

## —— Gogocarto Makefile ——
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Composer ————————————
composer-install: composer.lock ## Install Composer vendors according to the current composer.lock file
	$(COMPOSER) install

composer-update: composer.json ## Update vendors according to the composer.json file
	$(COMPOSER) update

## —— Symfony —————————————
sf: ## List all Symfony commands
	$(SYMFONY)

cc: ## Clear the cache
	$(SYMFONY) ca:cl

warmup: ## Warmump the cache
	$(SYMFONY) cache:warmup

fix-perms: ## Fix permissions of all var files
	chown -R www-data var/cache
	chown -R www-data var/log
	chown -R www-data var/sessions
	chown -R www-data web/uploads

install-assets: ## Install the assets
	$(SYMFONY) assets:install web/ --symlink

purge: ## Purge cache
	rm -rf var/cache/*
	chown -R www-data var/cache
	chmod 777 -R var/

## —— Yarn —————————————————
yarn-install: yarn.lock ## Install npm vendors according to the current yarn.lock file
	$(YARN) install

build: ## Build the assets
	$(GULP) build
	$(YARN) encore dev

watch:
	$(GULP) watch &
	$(YARN) encore dev --watch &

## —— Docker ——————————————
docker-build: ## Build Docker images
	$(DOCKER) -f $(DOCKER_COMPOSE) build --pull

up: ## Start the Docker hub
	$(DOCKER) -f $(DOCKER_COMPOSE) up -d

stop: ## Stop the Docker hub
	$(DOCKER) -f $(DOCKER_COMPOSE) stop

down: ## Down the Docker hub
	$(DOCKER) -f $(DOCKER_COMPOSE) down --remove-orphans

shell: ## Start shell inside Docker
	$(DOCKER) -f $(DOCKER_COMPOSE) exec gogocarto $(SHELL)

## —— Project —————————————
commands: ## Display all commands in the project namespace
	$(SYMFONY) list $(PROJECT)

init: install assets load-fixtures fix-perms ## Initialize the project

install: composer-install yarn-install ## Install vendors

assets: install-assets build ## Install and build the assets

load-fixtures: ## Create the DB schema, generate DB classes and load fixtures
	$(SYMFONY) doctrine:mongodb:schema:create
	$(SYMFONY) doctrine:mongodb:generate:hydrators
	$(SYMFONY) doctrine:mongodb:generate:proxies
	$(SYMFONY) doctrine:mongodb:fixtures:load -n

update-hydrator-proxies:
	$(SYMFONY) doctrine:mongodb:generate:hydrators
	$(SYMFONY) doctrine:mongodb:generate:proxies

## —— Tests ———————————————
test: phpunit.xml ## Launch unit tests
	./bin/phpunit --stop-on-failure

## —— Coding Standards ————
cs-fix: ## Run php-cs-fixer and fix the code
	./vendor/bin/php-cs-fixer fix src/

## —— Deploy & Prod ———————
gogo-update: ## Update a PROD server to the lastest version of gogocarto
	$(GIT) reset --hard master
	$(GIT) pull origin master
	$(YARN) install
	$(GULP) build
	$(GULP) production
	$(YARN) encore production
	COMPOSER_MEMORY_LIMIT=-1 $(COMPOSER) install
	$(SYMFONY) cache:clear --env=prod
	$(SYMFONY) db:migrate

	sleep 10 && chmod 777 -R var/ &
	sleep 60 && chmod 777 -R var/ &
	sleep 120 && chmod 777 -R var/ &
	sleep 300 && chmod 777 -R var/ &
	sleep 600 && chmod 777 -R var/ &
	sleep 2000 && chmod 777 -R var/ &

