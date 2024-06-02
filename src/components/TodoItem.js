// Importa React desde la librería de React
import React from 'react';

// Importa FontAwesomeIcon desde la librería de react-fontawesome para usar íconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importa dos íconos específicos (faCheck y faTimes) desde FontAwesome
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// Importa los estilos CSS específicos para este componente
import '../themes/TodoItem.css';

// Define un componente funcional llamado TodoItem que recibe las props: text, completed, onDeleted, y onToggleCompleted
function TodoItem({ text, completed, onDeleted, onToggleCompleted }) {
    return (
        // Renderiza un elemento de lista (<li>) con clases dinámicas
        // Si la tarea está completada, añade la clase 'completed' además de 'todo-item'
        <li className={`todo-item ${completed ? 'completed' : ''}`}>
            {/* Botón para marcar la tarea como completada */}
            <button className="ready-button" onClick={onToggleCompleted}>
                {/* Muestra el ícono de check usando FontAwesome */}
                <FontAwesomeIcon icon={faCheck}/>
            </button>
            {/* Renderiza el texto de la tarea */}
            <p>{text}</p>
            {/* Botón para eliminar la tarea */}
            <button className="deleted-button" onClick={onDeleted}>
                {/* Muestra el ícono de eliminar (X) usando FontAwesome */}
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </li>
    );
}

// Exporta el componente TodoItem para que pueda ser usado en otros archivos
export { TodoItem }

