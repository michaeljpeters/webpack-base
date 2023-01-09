build:
	mkdir -p dist
	cp -r static/* dist/
	cp -r src/* dist/

dev-server:
	python -m http.server --directory dist/ 8700 
