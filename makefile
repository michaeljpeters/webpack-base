build:
	npx webpack --mode production

dev-server:
	python -m http.server --directory dist/ 8700 
