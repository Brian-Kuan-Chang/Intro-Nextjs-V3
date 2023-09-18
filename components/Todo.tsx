'use client'
import { completeToDo } from '@/utils/actions'
import React, { useTransition } from 'react'

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'line-through text-gray-900' : ''
      }`}
      onClick={() => startTransition(() => completeToDo(todo.id))}
    >
      {todo.content}
    </div>
  )
}

export default Todo
