# Clipsmith frontend — plain static HTML/CSS/JS served by nginx.
FROM nginx:alpine

# worker_processes 1: the base image's default "auto" setting misreads
# container CPU limits in some environments and can spawn dozens of
# workers, which was hanging this service on Railway — pin it to 1.
COPY nginx.conf /etc/nginx/nginx.conf

# Railway sets $PORT at runtime; nginx needs a template to listen on it
# since the port isn't known until the container starts.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY . /usr/share/nginx/html

ENV PORT=8080
EXPOSE 8080
