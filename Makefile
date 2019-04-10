prod:
	npm start

dev:
	npm run dev

get-with-accept:
	./scripts/get-with-accept

get-without-accept:
	./scripts/get-without-accept

scripts: get-with-accept get-without-accept

.PHONY: \
	prod \
	dev \
	scripts
