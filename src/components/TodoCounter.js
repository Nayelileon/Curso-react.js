import React from 'react'; // Importa React desde la librería de React
// Importa los estilos CSS desde el archivo '../themes/TodoCounter.css'
import '../themes/TodoCounter.css';
import { CSSTransition } from 'react-transition-group'; 

// Define el componente funcional TodoCounter que recibe las props 'total' y 'completed'
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
            {/* Devuelve un div con la clase 'todo-counter' */}
            <div className="todo-counter">
                {/* Dentro del div, renderiza un elemento h1 que muestra el conteo de tareas completadas y el total de tareas */}
                <h1> {message} </h1>
            </div>
        </CSSTransition>
    );
}

// Exporta el componente TodoCounter para que pueda ser utilizado en otros archivos
export { TodoCounter };
