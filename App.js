import './App.css';
import { useState } from 'react';
import { hexToRgb, Typography} from '@mui/material';

import TodoForm from '../src/Components/TodoForm';
import TodoList from '../src/Components/TodoList';



function App() {
      const [todos,setTodos] = useState([])
      
      const removeTodo = (id) => {
          setTodos(todos.filter(todo => todo.id !== id))
      }
      
      const addTodo = (todo) => {
        setTodos([todo, ...todos])
      }

  return (
    <div className="App" style={{  marginLeft:'35%' }}>
    <Typography variant={`h1`}>
    Todo List
    </Typography>
      <TodoForm addTodo={addTodo}/>
      <TodoList 
                todos={todos}
                removeTodo={removeTodo} 
                />
  
    </div>
  );
}

export default App;
