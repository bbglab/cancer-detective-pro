FROM nginx:alpine

# Copy website files
COPY www /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Set environment variable for templates
ENV NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx/conf.d

# Expose the port
EXPOSE 8080