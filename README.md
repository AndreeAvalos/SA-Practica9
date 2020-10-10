# SA-Practica9
Practica 9 de Software Avanzado

## Descripcion
* Utilizar la práctica anterior como base.
* Hacer una construcción dentro del servidor web, o involucrar algún tercer servidor de aplicación que involucre una construcción de imagen para incorporación  de un plugin.
* Montar los datos de la base de datos mediante un volumen.
* Hacer desde el servidor web alguna consulta que utilice el plugin que se incorporó en la construcción.

## Pre-Requisitos 📋
* docker
* docker-compose

## Ejecucion 🚀
Construccion de los contenedores
```
docker-compose up -d
```
**Donde:**
* -d indica que se corre en modo demonio

## Comprobacion
Creamos una tabla en mysql, para esto entramos al contenedor
```
docker exec -it id_contenedor bash
```
Seguido de esto entramos a mysql
```
mysql -uroot -p
```
donde la contrasena es **root**, luego nos dirigimos hacia nuestras base de datos y la seleccionamos.
```
use db_p8;
```
Procedemos a crear nuestra tabla Alumno
```
CREATE TABLE Alumno (
    carnet int,
    dpi bigint,
    nombre varchar(25),
    apellido  varchar(25),
    email  varchar(50),
    telefono varchar(8)
);
```
Tambien insertamos un dato
```
insert into Alumno(carnet,dpi,nombre,apellido,email,telefono) values(201408580,2977840130108,"Andree","Avalos","aavalosoto@gmail.com","55555555");
```
Ahora Ingresamos a:
```
localhost:8080/viewAlumno
```
El resultado tendria que ser el siguiente
```
[
    {
        "carnet":201408580,
        "dpi":2977840130108,
        "nombre":"Andree",
        "apellido":"Avalos",
        "email":"aavalosoto@gmail.com",
        "telefono":"55555555"
    }
]
```
Si existe problema chequeamos la ip del contenedor con el siguiente comando
```
docker inspect --format '{{ .NetworkSettings.IPAddress }}' id_contenedor
```
y ponemos la ip del contenedor de mysql, y si es diferente a la parte de **/api/index.js**
```
var ip = '172.17.0.2';
```
la cambiamos a la que nos da como resultado el comando anterior. 
Ejecutamos el siguiente comando para volver a construir los contenedores
```
docker-compose up -d --build 
```
**Donde:**
* -d indica que se corre en modo demonio
* --build indica que vuelva a reconstruir los contenedores


## Construido con 🛠️
* [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) - Ambiente de trabajo
* [Node JS](https://nodejs.org/es/docs/)- Framework
* [MYSQL](https://dev.mysql.com/doc/)- MYSQL

## Autor ✒️
* Carlos Andree Avalos Soto - 201408580

## Referencias
* [Andree Avalos](https://github.com/andreeavalos)
* [Video Explicacion](https://drive.google.com/file/d/12tJAJUB5IEvbebFAFFW82sWl0B3JXxe9/view)