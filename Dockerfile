FROM nginx:1.27-alpine
COPY dist /usr/share/nginx/html/portafolio
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
