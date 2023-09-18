import Todo from './Todo'

import React from 'react'

export function TodoList({ todos }) {
  return (
    <div>
      {/* {todos.map((todo) => (
        <>
          <li>{todo.id}</li>
          <li>{todo.content}</li>
        </>
      ))} */}
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo}></Todo>
      })}
    </div>
  )
}
