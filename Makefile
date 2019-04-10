prd:
	npm start

dev:
	npm run dev

dev-debug:
	DEBUG=true npm run dev

get-with-accept:
	./scripts/get-with-accept

get-without-accept:
	./scripts/get-without-accept

post:
	./scripts/post

scripts: get-with-accept get-without-accept post

.PHONY: \
	prod \
	dev \
	get-with-accept \
	get-without-accept \
	post \
	scripts
