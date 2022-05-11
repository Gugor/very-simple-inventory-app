import React from 'react'

export function InventoryHeader({ inventoryHeaders}) {
  let headers = [];

  for(var key in inventoryHeaders) 
  {
        if(inventoryHeaders.hasOwnProperty(key)) 
        {
            headers.push(inventoryHeaders[key]);
        }
    }
    
    return (
        <header class="inventoryTableHeader">
            {
                headers.map((header)=> (
                    <div class="inventoryHeaderCell">{ header }</div>
                ))
                
            }
        </header>
    )
}
