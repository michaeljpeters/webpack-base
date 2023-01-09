build:
	npx webpack --mode development

dev-server:
	python -m http.server --directory dist/ 8700 
