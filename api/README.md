# Servidor

## Descripcion
Servidor que se conecta a una base de datos MYSQL que puede:
* Insertar
* Ver registros

## Dockerfile
```
FROM node:alpine
WORKDIR /server
COPY package.json . 
COPY package-lock.json .
RUN npm i express \
    && npm i body-parser \
    && npm i mysql
COPY index.js . 
CMD ["npm", "start"]
```
**Donde:**
* FROM nos indica que imagen queremos
* WORKDIR crea un directorio en el contenedor
* COPY copia los archivos desgnados en nuestro directorio de trabajo
* RUN correo los comando dentro del contenedor
* CMD comando para iniciar el servidor

## Construccion
Podemos solo construir la imagen con el siguiente comando
```
docker build -t name .
```
* -t indica un tag
* name indica el nombre que le queremos dar a la imagen
* **.** indica el directorio actual

## Ejecucion
```
docker run -p 8080:8080 -d imagen 
```
**Donde:**
* -p indica el puerto que queremos mapear
* * 8080 -> puerto de la maquina
* * 8080 -> puerto de el contenedor
* -d indica que nuestro contenedor correra en modo demonio
* imagen es el nombre la imagen que generamos con build