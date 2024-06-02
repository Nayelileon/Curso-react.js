import React, { useState } from 'react'; // Importa React y el hook useState desde la librería de React
import '../themes/TodoAdition.css' // Importa el archivo CSS para los estilos del componente

function TodoAdition({ onAddTask }) { // Define el componente TodoAdition que recibe una prop onAddTask

    const [taskText, setTaskText ] = useState(''); // Define el estado taskText y la función setTaskText para actualizarlo, inicializado como una cadena vacía

    const handleInputChange = (event) => { // Define la función handleInputChange que se llama cuando el input cambia
        setTaskText(event.target.value); // Actualiza taskText con el valor actual del input
    };

    const handleAddClick = () => { // Define la función handleAddClick que se llama cuando se hace clic en el botón "Agregar"
        if (taskText.trim() !== '') { // Verifica si taskText no está vacío después de eliminar los espacios en blanco
            onAddTask(taskText); // Llama a la función onAddTask pasando taskText como argumento
            setTaskText(''); // Restablece taskText a una cadena vacía
        }
    };

    return ( // Devuelve el JSX que representa la UI del componente
        <div className="adicion" > {/* Contenedor principal con clase CSS "adicion" */}
            <h1>TODO-LIST</h1> {/* Título del componente */}
            <div className="adicion-container" > {/* Contenedor interno con clase CSS "adicion-container" */}
                <input type="text" placeholder="Escribe una nueva tarea..." value={taskText} onChange={handleInputChange}/> {/* Input para escribir una nueva tarea con un placeholder, valor controlado por taskText y onChange manejado por handleInputChange */}
                <button onClick={handleAddClick}>Agregar</button> {/* Botón para agregar la nueva tarea con onClick manejado por handleAddClick */}
            </div>
        </div>
    );
}

export { TodoAdition }; // Exporta el componente TodoAdition
