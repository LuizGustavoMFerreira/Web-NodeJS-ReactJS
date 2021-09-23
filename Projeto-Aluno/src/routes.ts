import { Router, request, response, Request, Response } from 'express';

import { getStudent } from './controller/StudentController';
import { saveStudent } from './controller/StudentController';
import { getStudents } from './controller/StudentController';
import { updateStudent } from './controller/StudentController';
import { deleteStudent } from './controller/StudentController';
import { finishedStudent } from './controller/StudentController';

const routes = Router()

routes.get('/house', (request: Request, response: Response) => {
    return response.json({ message: "'Hello World!" })
})

routes.get('/students', getStudent)
routes.post('/student', saveStudent)
routes.get('/student/:id', getStudents)
routes.put('/student/:id', updateStudent)
routes.delete('/student/:id', deleteStudent)
routes.patch('/student/:id', finishedStudent)

export default routes;