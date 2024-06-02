// Importa la librería React para poder usar JSX y otros métodos de React.
import React from 'react';

// Importa los estilos CSS específicos para el componente TodoSearch desde la ruta relativa.
import '../themes/TodoSearch.css';

// Define un componente funcional de React llamado TodoSearch.
// Este componente recibe dos props: searchText y onSearchChange.
function TodoSearch({ searchText, onSearchChange }) {
    return (
        // Retorna un contenedor div con la clase "search-container" para aplicar estilos CSS.
        <div className="search-container">
            <input type="text" placeholder="Buscar tarea..." value={searchText} onChange={onSearchChange}/>
             {/* Renderiza un input de tipo texto. 
                - placeholder: Muestra un texto guía dentro del input cuando está vacío.
                - value: Establece el valor del input usando la prop searchText, lo que lo convierte en un input controlado.
                - onChange: Asigna una función manejadora de eventos que se ejecuta cada vez que el valor del input cambia.
            */}
        </div>
    );
}

// Exporta el componente TodoSearch para que pueda ser utilizado en otros archivos.
export { TodoSearch };
