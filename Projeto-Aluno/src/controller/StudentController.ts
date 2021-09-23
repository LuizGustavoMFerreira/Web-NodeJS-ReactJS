import { getRepository } from "typeorm";
import { Student } from "../entity/Student";
import { Request, Response} from "express";
import { request } from "http";

export const getStudent = async(request: Request, response: Response) => {
  const student = await getRepository(Student).find()

  return response.json(student);
};

export const saveStudent = async(request: Request, response: Response) => {
  const students = await getRepository(Student).save(request.body)
  
  return response.json(students);
};

export const getStudents = async(request: Request, response: Response) => {
  const {id} = request.params

  const student = await getRepository(Student).findOne(id)

  return response.json(student)
};

export const updateStudent = async(request: Request, response: Response) => {
  const {id} = request.params

  const student = await getRepository(Student).update(id, request.body)

  if (student.affected == 1) {
    const studentUpdate = await getRepository(Student).findOne(id)
    return response.json(studentUpdate)
  }
  else {
    return response.status(404).json({ message: 'Aluno não atualizado!' })
  }
};

export const deleteStudent = async(request: Request, response: Response) => {
  const {id} = request.params
  
  const student = await getRepository(Student).delete(id);
  
  if (student.affected == 1) {
    return response.status(200).json({ message: 'Aluno deletado com sucesso!' })
  }
  else {
    return response.status(404).json({ message: 'Aluno não encontrado!' })
  }
};

export const finishedStudent = async(request: Request, response: Response) => {
  const {id} = request.params

  const student = await getRepository(Student).update(id, {
    matricula: true,
  })

  if (student.affected == 1) {
    const studentFinished = await getRepository(Student).findOne(id) 
    return response.json(studentFinished)
  }
  else {
    return response.status(404).json( { message: 'Aluno não encontrado!' } )
  }
} 