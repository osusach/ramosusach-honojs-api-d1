import { Hono } from 'hono';
import { Env } from './types'

const careers = new Hono<{ Bindings: Env }>()

careers.get('/', async (c) => {
    const res = await c.env.FILES.prepare(`SELECT * FROM career ORDER BY id ASC`).all()
    const obtainedCareers = res.results
    return c.json(obtainedCareers)
})


careers.get('/:code', async (c) => {
    const code = c.req.param("code")
    const res = await c.env.FILES.prepare(`SELECT * FROM career WHERE id = ${code}`).all()
    const obtainedCareers = res.results
    return c.json(obtainedCareers)
})

careers.get('/byFaculty/:facultyCode', async (c) => {
    const code = c.req.param("facultyCode")
    const res = await c.env.FILES.prepare(`SELECT id, name FROM career WHERE facultyId = ${code} ORDER BY id ASC`).all()
    return c.json(res.results)
})

export default careers;
