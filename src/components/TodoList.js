// Importa la biblioteca React que es necesaria para usar JSX y crear componentes de React.
import React from 'react';

// Importa el archivo CSS de estilos específicos para el componente TodoList desde una carpeta llamada 'themes'.
import '../themes/TodoList.css'

// Define una función de componente de React llamada TodoList que toma 'props' como argumento.
// 'props' es un objeto que contiene todos los valores pasados al componente.
function TodoList(props) {
    return (
        // Devuelve un elemento JSX 'ul' (lista desordenada).
        <ul>
            {/* /Renderiza los elementos hijos pasados al componente TodoList a través de 'props.children'.
            // Esto permite que cualquier contenido anidado dentro del componente TodoList en su uso
            // se muestre aquí dentro del <ul>. */}
            {props.children}
        </ul>
    );
}

// Exporta el componente TodoList para que pueda ser importado y utilizado en otros archivos.
export { TodoList };
