import React, { useState } from 'react';
import { TodoSearch } from './components/TodoSearch'; // Importa el componente TodoSearch desde el archivo './components/TodoSearch'
import { TodoList } from './components/TodoList'; // Importa el componente TodoList desde el archivo './components/TodoList'
import { TodoItem } from './components/TodoItem'; // Importa el componente TodoItem desde el archivo './components/TodoItem'
import { TodoAdition } from './components/TodoAdition'; // Importa el componente TodoAdition desde el archivo './components/TodoAdition'
import { TodoCounter } from './components/TodoCounter'; // Importa el componente TodoCounter desde el archivo './components/TodoCounter'
import './themes/style.css'; // Importa los estilos CSS desde el archivo './themes/style.css'

function App() {

  const [todos, setTodos] = useState([ // Define un estado 'todos' usando el hook useState, inicializado con un array de tareas

    { text: 'Cortar cebolla', completed: true }, // Tarea 1: Cortar cebolla, completada
    { text: 'Tomar el curso de React.js', completed: false}, // Tarea 2: Tomar el curso de React.js, no completada
    { text: 'Llorar con la Llorona', completed: true }, // Tarea 3: Llorar con la Llorona, completada
    { text: 'Cortar el pelo', completed: false }, // Tarea 4: Cortar el pelo, no completada

  ]);

  const [searchText, setSearchText] = useState(''); // Define un estado 'searchText' para el texto de búsqueda, inicializado como una cadena vacía

  const handleDelete = (text) => { // Define la función 'handleDelete' que elimina una tarea del estado 'todos'
    setTodos(todos.filter(todo => todo.text !== text)); // Actualiza el estado 'todos' filtrando las tareas cuyo texto sea diferente al texto pasado como argumento
  };

  const handleToggleComplete = (text) => { // Define la función 'handleToggleComplete' que cambia el estado de completado de una tarea
    setTodos(todos.map(todo => todo.text === text ? { ...todo, completed: !todo.completed } : todo)); // Actualiza el estado 'todos' cambiando el estado de completado de la tarea cuyo texto coincide con el texto pasado como argumento
  };

  const handleSearchChange = (event) => { // Define la función 'handleSearchChange' que maneja los cambios en el input de búsqueda
    setSearchText(event.target.value); // Actualiza el estado 'searchText' con el valor del input de búsqueda
  };

  const handleAddTask = (text) => { // Define la función 'handleAddTask' que agrega una nueva tarea al estado 'todos'
    setTodos([...todos, { text, completed: false }]); // Agrega una nueva tarea al estado 'todos' con el texto pasado como argumento y el estado de completado como false
  };

  const completedTodos = todos.filter(todo => todo.completed).length; // Calcula la cantidad de tareas completadas contando las tareas con el estado 'completed' en true
  const totalTodos = todos.length; // Obtiene la cantidad total de tareas en el estado 'todos'

  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase())); // Filtra las tareas basadas en el texto de búsqueda, convirtiendo todo el texto a minúsculas

  return (
    <div className="app"> 
     {/* Renderiza un div con la clase 'background'  */}

      <div className="visual" > 
       {/* Renderiza un div con la clase 'visual' */}

        <TodoCounter completed={completedTodos} total={totalTodos} /> 
        {/* Renderiza el componente TodoCounter con las propiedades 'completed' y 'total' */}

        <div className="search" > 
        {/* Renderiza un div con la clase 'search' */}
          <TodoSearch searchText={searchText} onSearchChange={handleSearchChange} /> 
           {/* Renderiza el componente TodoSearch con las propiedades 'searchText' y 'onSearchChange' */}
        </div>

        <div className="List">
           {/* Renderiza un div con la clase 'List' */}

          <TodoList> 
             {/* Renderiza el componente TodoList */}

            {filteredTodos.map(todo => ( // Mapea y renderiza cada tarea filtrada como un componente TodoItem

              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed} 
                onDeleted={() => handleDelete(todo.text)} // Propiedad 'onDeleted' que maneja la eliminación de una tarea
                onToggleCompleted={() => handleToggleComplete(todo.text)} // Propiedad 'onToggleCompleted' que maneja el cambio de estado de completado de una tarea
              />
            
            ))}

          </TodoList>
        </div>
      </div>

      <div className="adition" > 
      {/* Renderiza un div con la clase 'adition' */}
        <TodoAdition onAddTask={handleAddTask}/> 
        {/* Renderiza el componente TodoAdition con la propiedad 'onAddTask' */}
      </div>

    </div>
  );
}

export default App; // Exporta el componente App