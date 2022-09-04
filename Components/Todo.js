import React from 'react'
import { IconButton ,Checkbox,ListItem, Typography} from '@mui/material'
import { AiFillDelete } from 'react-icons/ai';
export default function Todo({todo,removeTodo}) {
        const handleRemove = () => {
            removeTodo(todo.id)
        }
    
  return (
    <ListItem style={{textAlign:'center'}}>
           <Checkbox type={`checkbox`} />
    <Typography 
    variant='body1' 
    style={{
        color:"black",
    }}
    >{todo.task}</Typography>
    <IconButton onClick={handleRemove}>
    <AiFillDelete/>
    </IconButton>
    </ListItem>
  )
}
