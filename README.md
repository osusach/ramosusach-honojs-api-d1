# RamosUSACH Hono.js API
<p align="center"><a href="https://www.linkedin.com/company/usachopensource" target="_blank" rel="noopener noreferrer"><img width="150" src="https://i.imgur.com/l7q68Hs.png" alt="USACH Open Source Logo"></a></p>

<a href="https://github.com/open-source-usach/ramosusach-honojs-api-d1/blob/main/README.md"><img src = "https://img.shields.io/badge/lang-en-blue"></a>
<a href = "https://github.com/open-source-usach/ramosusach-honojs-api-d1/blob/main/README.es.md"><img src="https://img.shields.io/badge/lang-es-yellow"></a>

This API just works as an easy way to access the information gathered by <a href="https://github.com/open-source-usach/usach-course-scrapper">USACH Course Scrapper</a>; contains all the courses, careers and faculties we could get from public sources.

We think we have all careers, but we know that, for almost all careers, we only have courses up to the 6th level of tuition, or end of the 3rd year. We know this is a major flaw, as it means we're missing at least 10-12 courses **per career**, so we're planning and working on the possibility to add more courses to the database, probably internally, by using (scrapping hehe) the data given personally for each student about its career at the university's intranet.



## Technologies

- TypeScript with Hono.js
- Cloudflare Workers
- D1 Database (SQLite for Cloudflare Workers)

## Endpoints


This API has three main endpoints, every one pretty self-explanatory:

| Route | Description |
| ----------- | ----------- |
| /courses | To get course data |
| /career | To get career data |
| /faculty | To get faculty data |


## /Courses

| Route | Description | Response |
| ----------- | ----------- |------------|
| / | To get the data from all courses available | [ { id: int, name: string }, ... ] |
| /\<course id> | To get the data from a course  | [ { id: int, name: string } ]|
| /byFaculty/\<faculty id> | To get the data from all courses taught at a faculty |{ id: int, name: string }, ... ]|
| /byCareer/\<career id>| To get the data from all courses taught at a career| { id: int, name: string }, ... ]|

## /Careers

| Route | Description | Response |
| ----------- | ----------- |------------|
| / | To get the data from all careers available | [ { id: int, name: string, facultyId: int }, ... ] |
| /\<career id> | To get the data from a career  | [ { id: int, name: string, facultyId: int } ]|
| /byFaculty/\<faculty id> | To get the data from all careers taught at a faculty |{ id: int, name: string }, ... ]|

## /Faculties

| Route | Description | Response |
| ----------- | ----------- |------------|
| / | To get the data from all faculties available | [ { id: int, name: string }, ... ] |
| /\<faculty id> | To get the data from a faculty  | [ { id: int, name: string } ] |




## Faculty ids

You can get them by just calling /faculties, but we'll show them here just as an easy way to access them.

| Name | id | Note  |
| ----------- | ----------- |------------|
| Vicerrectoría Académica | 15 | No note |
| Vicerrectoría de Apoyo al Estudiante | 22 | Doesn't have any careers |
| Facultad de Ingeniería | 40 | No note |
| Facultad de Ciencia| 50| No note |
| Facultad de Humanidades | 55 | No note |
| Facultad de Administración y Economía | 60 | No note |
| Facultad Tecnológica | 65 | No note |
| Facultad de Ciencias Médicas | 83 | No note |
| Facultad de Química y Biología | 95 | No note |
| Vicerrectoría de Postgrado | 110 | Doesn't have any careers |
| Vicerrectoría de Vinculación con el Medio | 120 | Doesn't have any careers |
| Facultad de Derecho | 125 | Only has one career |

We hope this API is useful and (with a bit of luck and work) just the first step in many interesting projects for our community :)

