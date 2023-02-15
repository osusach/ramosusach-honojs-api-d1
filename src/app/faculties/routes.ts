import { Hono } from 'hono';
import { Env } from './types'

const faculties = new Hono<{ Bindings: Env }>()



faculties.get('/', async (c) => {
    const res = await c.env.FILES.prepare(`SELECT * FROM faculty ORDER BY id ASC`).all()
    return c.json(res.results)
})

faculties.get('/:facultyCode', async (c) => {
    const code = c.req.param("facultyCode")
    const res = await c.env.FILES.prepare(`SELECT * FROM faculty WHERE id = ${code}`).all()
    const obtainedCareers = res.results
    return c.json(obtainedCareers)
})

export default faculties