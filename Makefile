help:
	@echo
	@echo "	   __  _______ __________  _____ "
	@echo "	  / / / / ___// ____/ __ \/ ___/ "
	@echo "	 / / / /\__ \/ __/ / /_/ /\__ \  "
	@echo "	/ /_/ /___/ / /___/ _, _/___/ /  "
	@echo "	\____//____/_____/_/ |_|/____/   "
	@echo
	@echo "  bootstrap 		Install dependencies"
	@echo "  update 		Update dependencies"
	@echo "  start			Start all services"
	@echo


bootstrap:
	@cd frontend && yarn install --non-interactive
	@npx prisma migrate dev --name init --schema=frontend/prisma/schema.prisma
	@lefthook install

update:
	@yarn --cwd ./frontend install

server:
	@pm2 start .devcontainer/pm2.json
	@pm2 stop "prisma studio"