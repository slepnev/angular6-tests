FROM nginx:1.11.1

COPY dist/angular-tests/ /usr/share/nginx/html
COPY run.sh /run.sh

CMD ["bash", "/run.sh"]
