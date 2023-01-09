build:
	npx webpack

serve:
	npx webpack serve --no-open

serve-dist:
	python -m http.server --directory dist/ 8700 
