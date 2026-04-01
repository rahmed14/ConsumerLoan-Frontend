
FROM nginx:alpine
COPY dist/loan-frontend /usr/share/nginx/html
EXPOSE 80