#!/bin/sh

/bin/sed -i "s|http://localhost:3500|${BASE_URL}|" /usr/share/nginx/html/main*.js

nginx -g 'daemon off;'
