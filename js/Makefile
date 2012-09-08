handlebars:
	handlebars templates/* -f tmpl.js


watch:
	echo "watching js template files..."; \
	watchr -e "watch('templates/.*') { system 'make handlebars' }"
