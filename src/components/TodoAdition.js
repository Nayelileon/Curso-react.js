import React, { useState } from 'react'; 
import '../themes/TodoAdition.css'; 

function TodoAdition({ addTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (event) => {
      setNewTodo(event.target.value);
    };
  
    const handleAddClick = () => {
      if (newTodo.trim() !== '') {
        addTodo(newTodo);
        setNewTodo('');
      }
    };
  
 
    return ( 
        <div className="adicion" >
            <h1>TODO-LIST</h1>
            <div className="adicion-container"  > 
                <input 
                    type="text" 
                    placeholder="Escribe una nueva tarea..." 
                    value={newTodo}
                    onChange={handleInputChange}
                /> 
                <button onClick={handleAddClick}>Agregar</button>
            </div>
        </div>
    );
}

export { TodoAdition }; // Exporta el componente TodoAdition
