# Usamos la imagen oficial de Node.js como base
FROM node:18-alpine

# Establecemos el directorio de trabajo en /app
WORKDIR /app

# Copiamos todos los archvios
COPY . .

#Ejecutamos el proyecto
RUN npm install

#Exponemos el puerto 3000 para exponer las api de la app
EXPOSE 3000

#Ejecutamos el backend
CMD ["node", "index.js"]

