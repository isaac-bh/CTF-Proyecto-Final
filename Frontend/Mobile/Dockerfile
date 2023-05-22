# Utiliza una imagen base ligera de Nginx
FROM nginx:alpine

# Copia los archivos estáticos de tu aplicación a la carpeta de contenido estático de Nginx
COPY dist /usr/share/nginx/html

# Expone el puerto 80 para que se pueda acceder a la aplicación
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
