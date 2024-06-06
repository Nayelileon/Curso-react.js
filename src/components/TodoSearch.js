import React from 'react';
import '../themes/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="Buscar tarea..." 
                value={searchValue} 
                onChange={onSearchValueChange}
            />
        </div>
    );
}

// Exporta el componente TodoSearch para que pueda ser utilizado en otros archivos.
export { TodoSearch };
