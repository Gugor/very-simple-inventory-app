import React from 'react'

export function ButtonAdd({ handleAddItem }) 
{
  //Tiene que abrir un nuevo formulario en blanco
  return (
    <div class="buttonWrapper"> 
        <button onClick={ handleAddItem }>+ Add Object</button>
    </div>
  )
}
