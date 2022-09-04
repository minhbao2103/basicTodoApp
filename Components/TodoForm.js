import React from 'react'
import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import {Button, TextField  } from '@mui/material';

export default function TodoForm({addTodo}) {
    const initialObject = {
        id:"",
        task:"",
        completed: false
    }
    const [todo,setTodo] = useState(initialObject)
    
    const handleTaskInputChange = (e) => {
         setTodo({...todo, task: e.target.value})
    }
    
    const handleSubmit = (e) => {
       e.preventDefault()
       if (todo.task.trim()) {
           addTodo({ ...todo, id: uuidv4() })
           setTodo({ ...todo , task:'' })
       }
    } 

  return (

    <form onSubmit={handleSubmit}>
        <TextField size='small'
            name={`task`}
            type={`text`}
            value={todo.task}
            onChange={handleTaskInputChange}
        />
        <Button type='submit'>Submit</Button>
    </form>
  )
}
