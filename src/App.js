import React, { useState, useEffect } from 'react';
import { TodoSearch } from './components/TodoSearch'; // Importa el componente TodoSearch desde el archivo './components/TodoSearch'
import { TodoList } from './components/TodoList'; // Importa el componente TodoList desde el archivo './components/TodoList'
import { TodoAdition } from './components/TodoAdition'; // Importa el componente TodoAdition desde el archivo './components/TodoAdition'
import { TodoCounter } from './components/TodoCounter'; // Importa el componente TodoCounter desde el archivo './components/TodoCounter'
import './themes/style.css'; // Importa los estilos CSS desde el archivo './themes/style.css'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de React', completed: true },
  { text: 'Llorar con la Llorona', completed: true },
  { text: 'Cortar el pelo', completed: false },

];

function App() {

  // const [todos, setTodos] = useState([ // Define un estado 'todos' usando el hook useState, inicializado con un array de tareas

  //   { text: 'Cortar cebolla', completed: true }, // Tarea 1: Cortar cebolla, completada
  //   { text: 'Tomar el curso de React.js', completed: false}, // Tarea 2: Tomar el curso de React.js, no completada
  //   { text: 'Llorar con la Llorona', completed: true }, // Tarea 3: Llorar con la Llorona, completada
  //   { text: 'Cortar el pelo', completed: false }, // Tarea 4: Cortar el pelo, no completada

  // ]);

  // const [searchText, setSearchText] = useState(''); // Define un estado 'searchText' para el texto de búsqueda, inicializado como una cadena vacía

  // const handleDelete = (text) => { // Define la función 'handleDelete' que elimina una tarea del estado 'todos'
  //   setTodos(todos.filter(todo => todo.text !== text)); // Actualiza el estado 'todos' filtrando las tareas cuyo texto sea diferente al texto pasado como argumento
  // };

  // const handleToggleComplete = (text) => { // Define la función 'handleToggleComplete' que cambia el estado de completado de una tarea
  //   setTodos(todos.map(todo => todo.text === text ? { ...todo, completed: !todo.completed } : todo)); // Actualiza el estado 'todos' cambiando el estado de completado de la tarea cuyo texto coincide con el texto pasado como argumento
  // };

  // const handleSearchChange = (event) => { // Define la función 'handleSearchChange' que maneja los cambios en el input de búsqueda
  //   setSearchText(event.target.value); // Actualiza el estado 'searchText' con el valor del input de búsqueda
  // };

  // const handleAddTask = (text) => { // Define la función 'handleAddTask' que agrega una nueva tarea al estado 'todos'
  //   setTodos([...todos, { text, completed: false }]); // Agrega una nueva tarea al estado 'todos' con el texto pasado como argumento y el estado de completado como false
  // };

  // const completedTodos = todos.filter(todo => todo.completed).length; // Calcula la cantidad de tareas completadas contando las tareas con el estado 'completed' en true
  // const totalTodos = todos.length; // Obtiene la cantidad total de tareas en el estado 'todos'

  // const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase())); // Filtra las tareas basadas en el texto de búsqueda, convirtiendo todo el texto a minúsculas
  
  const [todos, setTodos] = useState(() => {
    // Leer tareas de localStorage
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : defaultTodos;
  });

  const [searchValue, setSearchValue] = useState('');
  
  useEffect(() => {
    // Guardar tareas en localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const toggleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    console.log(todos); // Verificar el contenido de todos
    console.log(index); // Verificar el valor de index

    if (Array.isArray(todos) && typeof index === 'number' && index >= 0 && index < todos.length) {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    } else {
      console.error('Error al intentar eliminar la tarea. Asegúrate de que "todos" es un array y "index" es un número válido.');
    }
  };

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