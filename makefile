build:
	mkdir -p dist
	cp -r static/* dist/
	npx webpack

dev-server:
	python -m http.server --directory dist/ 8700 
