# Usamos la imagen oficial de Node.js como base
FROM node:18-alpine

# Establecemos el directorio de trabajo en /app
WORKDIR /app

# Copiamos los archivos de paquete (package.json y package-lock.json) a /app
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos todos los archivos del proyecto al directorio de trabajo (/app)
COPY . .

# Compilamos la aplicación de Angular en modo de producción
RUN npm run build --prod

# Configuramos el servidor web NGINX
FROM nginx:1.23.4-alpine

# Copiamos los archivos de compilación de Angular al directorio de trabajo de NGINX
COPY --from=0 /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 para acceder a la aplicación en el navegador
EXPOSE 80

# Comando para iniciar el servidor NGINX
CMD ["nginx", "-g", "daemon off;"]
