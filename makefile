build:
	npx webpack

serve:
	npx webpack serve --no-open

dev-server:
	python -m http.server --directory dist/ 8700 
