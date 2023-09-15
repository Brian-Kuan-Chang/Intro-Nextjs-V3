import { TodoList } from '@/components/TodoList'
import db from '@/utils/db'
import { resolve } from 'path'
const getData = async () => {
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  })
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  console.log('todoslist:', todos)
  return <div>{<TodoList todos={todos}></TodoList>}</div>
}
export default TodosPage
