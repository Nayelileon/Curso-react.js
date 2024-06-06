import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../themes/TodoItem.css';

function TodoItem({ text, completed, onDeleted, onToggleCompleted }) {
    return (
        <li className={`todo-item ${completed ? 'completed' : ''}`}>
           <button className="ready-button" onClick={onToggleCompleted}>
                <FontAwesomeIcon icon={faCheck}/>
            </button>
            <p>{text}</p>
            <button className="deleted-button" onClick={onDeleted}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </li>
    );
}

// Exporta el componente TodoItem para que pueda ser usado en otros archivos
export { TodoItem }

