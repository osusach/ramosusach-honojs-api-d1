import { Hono } from 'hono';
import { cors } from 'hono/cors';
import careers from './app/careers/routes'
import courses from './app/courses/routes'
import faculties from './app/faculties/routes'


export interface Env {
	FILES: D1Database;
}

const app = new Hono<{Bindings: Env}>()

app.route('/careers', careers)
app.route('/courses', courses)
app.route('/faculties', faculties)
export default app