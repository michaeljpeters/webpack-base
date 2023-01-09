build:
	mkdir -p dist
	cp static/index.html dist/
	cp src/index.js dist/

dev-server:
	python -m http.server --directory dist/ 8700 
