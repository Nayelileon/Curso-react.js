import React, { useState } from 'react';
import { TodoSearch } from './components/TodoSearch'; // Importa el componente TodoSearch desde el archivo './components/TodoSearch'
import { TodoList } from './components/TodoList'; // Importa el componente TodoList desde el archivo './components/TodoList'
import { TodoAdition } from './components/TodoAdition'; // Importa el componente TodoAdition desde el archivo './components/TodoAdition'
import { TodoCounter } from './components/TodoCounter'; // Importa el componente TodoCounter desde el archivo './components/TodoCounter'
import { UseTodos } from './hooks/UseTodos';
import './themes/style.css'; // Importa los estilos CSS desde el archivo './themes/style.css'

function App() {

  const { todos, addTodo, toggleCompleteTodo, deleteTodo } = UseTodos();
  const [searchValue, setSearchValue] = useState('');
 
  const filteredTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="app"> 
      <div className="visual" > 
        
        <TodoCounter completed={todos.filter(todo => todo.completed).length} total={todos.length} />  
        <div className="search" > 
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} /> 
        </div>

        <div className="List">
           <TodoList todos={filteredTodos} toggleCompleteTodo={toggleCompleteTodo} deleteTodo={deleteTodo}/>     
        </div>
      </div>

      <div className="adition" > 
        <TodoAdition addTodo={addTodo} />
      </div>

    </div>
  );
}

export default App; // Exporta el componente App