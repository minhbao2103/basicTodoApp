import React from 'react'
import Todo from '../Components/Todo'
import { List } from '@mui/material'
export default function TodoList({todos,removeTodo}) {
  return (
  <List  style={{listStyleType:'none',textAlign:'center'}}>
    {todos.map((todo) => (
      <Todo key ={todo.id} todo={todo} removeTodo={removeTodo}/>
    ))}
  </List>
  )
}
