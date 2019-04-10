install:
	npm install

prd:
	npm start

debug:
	DEBUG=true npm start

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

test:
	npm run test

.PHONY: \
	install \
	prod \
	debug \
	dev \
	dev-debug \
	get-with-accept \
	get-without-accept \
	post \
	scripts \
	test
