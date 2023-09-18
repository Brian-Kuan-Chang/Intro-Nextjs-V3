'use client'
import { newTodo } from '@/utils/actions'
import React, { useState } from 'react'

export default function NewTodoForm() {
  const [state, setstate] = useState('')
  console.log('NewTodoForm')
  return (
    <div>
      <h1></h1>
      <form action={newTodo}>
        <input type="text" name="content" className="bg-red-100 " />
      </form>
    </div>
  )
}
