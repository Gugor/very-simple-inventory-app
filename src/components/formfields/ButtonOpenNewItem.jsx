import React from 'react'

export function ButtonOpenNewItem({ inventoryForm, OpenNewItem }) 
{
  function handleOpenNewItem() 
  {
    OpenNewItem( inventoryForm );
  }
  return (
    <div class="buttonWrapper"> 
        <button onClick={ handleOpenNewItem }>+ Add Object</button>
    </div>
  )
}
