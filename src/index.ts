import { Hono } from 'hono';
import { cors } from 'hono/cors';
import careers from './app/careers/routes'
import courses from './app/courses/routes'
import faculties from './app/faculties/routes'


export interface Env {
	FILES: D1Database;
}

const app = new Hono<{Bindings: Env}>()
app.get('/', async (c)=> {
	return c.text("Holaaa, nos alegra que estés probando esta API, para obtener la información debes ocupar las rutas /courses, /careers o /faculties. Puedes encontrar instrucciones más detalladas en https://github.com/open-source-usach/ramosusach-honojs-api-d1")
})

app.route('/careers', careers)
app.route('/courses', courses)
app.route('/faculties', faculties)
export default app