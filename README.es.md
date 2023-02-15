# RamosUSACH Hono.js API
<p align="center"><a href="https://www.linkedin.com/company/usachopensource" target="_blank" rel="noopener noreferrer"><img width="150" src="https://i.imgur.com/l7q68Hs.png" alt="USACH Open Source Logo"></a></p>

<a href="https://github.com/open-source-usach/ramosusach-honojs-api-d1/blob/main/README.md"><img src = "https://img.shields.io/badge/lang-en-blue"></a>
<a href = "https://github.com/open-source-usach/ramosusach-honojs-api-d1/blob/main/README.es.md"><img src="https://img.shields.io/badge/lang-es-yellow"></a>

Esta API se creó como una manera sencilla y rápida de acceder a la información recolectada por <a href="https://github.com/open-source-usach/usach-course-scrapper">USACH Course Scrapper</a>; contiene todos los ramos, carreras y facultades que pudimos obtener de fuentes públicas.

Creemos tener todas las carreras, pero sabemos que, para casi todas las carreras, solamente tenemos los ramos hasta el 6to nivel o finales del 3er año de carrera. Sabemos que este es un problema mayor, ya que significa que nos faltan como mínimo 10-12 ramos **por carrera**, por lo que estamos planeando y trabajando en la posibilidad de agregar más ramos a la base de datos, probablemente de manera interna, utilizando (scrappeando hehe) los datos entregados personalmente a cada estudiante sobre su carrera en la intranet de la univertsidad (El loa)




## Tecnologías

- TypeScript con Hono.js
- Cloudflare Workers
- Base de datos D1 (SQLite para Cloudflare Workers)

## Endpoints


Esta API tiene tres endpoints principales, cada uno bastante autoexplicatorio:

| Ruta | Descripción |
| ----------- | ----------- |
| /courses | Para obtener información de los ramos |
| /career | Para obtener información de las carreras |
| /faculty | Para obtener información de las facultades |


## /Courses

| Ruta | Descripción | Respuesta |
| ----------- | ----------- |------------|
| / | Para obtener la información de todos los cursos disponibles | [ { id: int, name: string }, ... ] |
| /\<id ramo> | Para obtener la información de un ramo | [ { id: int, name: string } ]|
| /byFaculty/\<id facultad> | Para obtener la información de todos los ramos impartidos en una facultad |{ id: int, name: string }, ... ]|
| /byCareer/\<id carrera>| Para obtener la información de todos los ramos impartidos en una carrera | { id: int, name: string }, ... ]|

## /Careers

| Ruta | Descripción | Respuesta |
| ----------- | ----------- |------------|
| / | Para obtener la información de todas las carreras disponibles | [ { id: int, name: string, facultyId: int }, ... ] |
| /\<id carrera> | Para obtener la información de una carrera  | [ { id: int, name: string, facultyId: int } ]|
| /byFaculty/\<id facultad> | Para obtener la información de todas las carreras pertenecientes a una facultad |{ id: int, name: string }, ... ]|

## /Faculties

| Ruta | Descripción | Respuesta |
| ----------- | ----------- |------------|
| / | Para obtener la información de todas las facultades disponibles | [ { id: int, name: string }, ... ] |
| /\<id facultad> | Para obtener la información de una facultad  | [ { id: int, name: string } ] |




## Ids de facultades

Puedes obtenerlas simplemente yendo a /faculties, pero las dejaremos acá como una manera sencilla de acceder a ellas

| Nombre | id | Nota  |
| ----------- | ----------- |------------|
| Vicerrectoría Académica | 15 | Sin nota |
| Vicerrectoría de Apoyo al Estudiante | 22 | No tiene ninguna carrera |
| Facultad de Ingeniería | 40 | Sin nota |
| Facultad de Ciencia| 50| Sin nota |
| Facultad de Humanidades | 55 | Sin nota |
| Facultad de Administración y Economía | 60 | Sin nota |
| Facultad Tecnológica | 65 | Sin nota |
| Facultad de Ciencias Médicas | 83 | Sin nota |
| Facultad de Química y Biología | 95 | Sin nota |
| Vicerrectoría de Postgrado | 110 | No tiene ninguna carrera |
| Vicerrectoría de Vinculación con el Medio | 120 | No tiene ninguna carrera |
| Facultad de Derecho | 125 | Sólo tienen una carrera |


Esperamos que esta API sea útil y (con un poquito de suerte y trabajo) solamente el primer paso para un montón de proyectos interesantes para nuestra comunidad :)

