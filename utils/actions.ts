'use server'
import { revalidatePath } from 'next/cache'
import db from './db'
export const newTodo = async (data: FormData) => {
  const newTodo = data.get('content') as string

  if (newTodo) {
    await db.todo.create({
      data: {
        content: newTodo,
      },
    })
    revalidatePath('/todos')
  }
}

export const completeToDo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  })
  revalidatePath('/todos')
}
