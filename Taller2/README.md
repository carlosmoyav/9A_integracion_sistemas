# Taller 2

En este taller use el framework Angular, utilizado como frontend para un trabajo en clase de la materia de modelamiento y simulación

Con el siguiente comando corri el proyecto
```sh
docker-compose up -d --build --force-recreate
```
<img width="840" alt="4  docker-compose up -d --build =-force-recreate" src="https://user-images.githubusercontent.com/56742341/235850609-16d050c1-2780-44ea-9fab-89f1b84ae50c.png">

El frontend se ve de esta forma

<img width="1726" alt="7  pagina web" src="https://user-images.githubusercontent.com/56742341/235850779-9a562082-a025-45a7-b997-83a76d678057.png">

Si queremos trabajar de forma interactiva debemos usar el siguiente comando:
```sh
docker exec -it <container_id> sh
```
Dentro de las flechas debemos reemplazarlo con nuestro id del container,
para eso debemos colocar el siguiente comando

```sh
docker ps
```

<img width="1012" alt="9  docker ps" src="https://user-images.githubusercontent.com/56742341/235851620-a9e6fdd4-863d-4a6d-b941-18f4abf83a4a.png">

Una vez hayamos realizado estos pasos, podremos introducir los comandos,
de esta forma es como si estuvieramos programando desde el host

Podemos crear servicios con este codigo:
```sh
ng generate service miServicio
```
<img width="668" alt="10  ng generate" src="https://user-images.githubusercontent.com/56742341/235856392-67cdd64f-49d6-4184-be11-1dfa2867ea21.png">


Podemos tambien evitar crear una nueva carpeta mientras creamos un nuevo componente con el siguiente comando
```sh
ng generate component nuevoComponente –flat
```

<img width="804" alt="11  ng" src="https://user-images.githubusercontent.com/56742341/235858010-e3a096c2-e4c3-4a5f-a01a-ecc5b216f406.png">

Aqui se ve que ya se crearon los componentes

<img width="310" alt="12" src="https://user-images.githubusercontent.com/56742341/235858447-dbb14507-056b-4738-a30d-0eee593bda26.png">

Podemos usar el siguiente comando para instalar axios
```sh
npm install axios
```
<img width="773" alt="13" src="https://user-images.githubusercontent.com/56742341/235859292-6d3a2dfe-8a68-4a71-9cfc-bd760eabacdd.png">

En el package json podemos ver que ya se instalo

<img width="838" alt="14" src="https://user-images.githubusercontent.com/56742341/235860241-e25b24aa-540e-4135-9e1a-ede813c071e0.png">








