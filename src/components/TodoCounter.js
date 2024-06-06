import React from 'react'; 
import '../themes/TodoCounter.css';
import { CSSTransition } from 'react-transition-group'; 

function TodoCounter({ total, completed }) {

    let message;
    if (completed === 0 ) {
        message = "No has completado ninguna tarea. ¡Es hora de iniciar!";
    } else if (completed === total) {
        message = "¡Felicidades! Has completado todas tus tareas. ¡Bien Hecho!";
    } else {
        message = `Has completado ${completed} de ${total} tareas.`;
    }

    return (
        <CSSTransition in={true} appear={true} timeout={500} classNames="counter">
            <div className="todo-counter">
                <h1> {message} </h1>
            </div>
        </CSSTransition>
    );
}

// Exporta el componente TodoCounter para que pueda ser utilizado en otros archivos
export { TodoCounter };
