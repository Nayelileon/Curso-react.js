import React from 'react';
import { TodoItem } from './TodoItem';
import '../themes/TodoList.css'

function TodoList({ todos, toggleCompleteTodo, deleteTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                text={todo.text}
                completed={todo.completed}
                onToggleCompleted={() => toggleCompleteTodo(index)}
                onDeleted={() => deleteTodo(index)}
              />   
            ))}
        </ul>
    );
}

// Exporta el componente TodoList para que pueda ser importado y utilizado en otros archivos.
export { TodoList };
