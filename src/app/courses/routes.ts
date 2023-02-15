import { Hono } from 'hono';
import { Env } from './types'


const courses = new Hono<{ Bindings: Env }>()

courses.get('/', async (c) => {
    const res = await c.env.FILES.prepare(`SELECT * FROM course`).all()
    return c.json(res.results)
})

courses.get('/:courseCode', async (c) => {
    const code = c.req.param("courseCode")
    const res = await c.env.FILES.prepare(`SELECT * FROM course WHERE id = ${code}`).all()
    return c.json(res.results)
})

courses.get('/byCareer/:careerCode', async (c) => {
    const code = c.req.param("careerCode")
    const res = await c.env.FILES.prepare(`SELECT c.* FROM careerCourse cc INNER JOIN course c ON cc.courseId = c.id WHERE cc.careerId = ${code}`).all()
    return c.json(res.results)
})

courses.get('/byFaculty/:facultyCode', async (c) => {
    const code = c.req.param("facultyCode")
    const res = await c.env.FILES.prepare(`SELECT course.* FROM (SELECT DISTINCT cc.courseId FROM careerCourse cc INNER JOIN career c ON cc.careerId = c.id AND c.facultyId = ${code}) cd INNER JOIN course ON cd.courseId = course.id ORDER BY course.id ASC`).all()
    return c.json(res.results)
})

export default courses