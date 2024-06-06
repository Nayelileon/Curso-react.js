import { useState, useEffect } from "react";

const defaultTodos = [
    { text: 'Cortar cebolla', completed: false },
    { text: 'Tomar el curso de React', completed: true },
    { text: 'Llorar con la Llorona', completed: true },
    { text: 'Cortar el pelo', completed: false },
  
  ];
  
function UseTodos() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : defaultTodos;
    });
  
    useEffect(() => {
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
  
    return {
      todos,
      addTodo,
      toggleCompleteTodo,
      deleteTodo,
    };
  
  }
  
  export { UseTodos};
  