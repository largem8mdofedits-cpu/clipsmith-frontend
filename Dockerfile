# Clipsmith frontend — plain static HTML/CSS/JS served by nginx.
FROM nginx:alpine

# Railway sets $PORT at runtime; nginx needs a template to listen on it
# since the port isn't known until the container starts.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY . /usr/share/nginx/html

ENV PORT=8080
EXPOSE 8080
