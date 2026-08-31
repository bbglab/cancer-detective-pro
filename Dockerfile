FROM nginx:alpine

# Copy website files
COPY cancer-detective-pro /usr/share/nginx/html

# Set environment variable for templates
ENV NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx/conf.d
ENV PORT=80

# Expose the port
EXPOSE 8080