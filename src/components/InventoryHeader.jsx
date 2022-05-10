import React from 'react'

export function InventoryHeader({ inventoryHeaders}) {
  let headers = [];
  console.log(inventoryHeaders);
  for(var key in inventoryHeaders) 
  {
        if(inventoryHeaders.hasOwnProperty(key)) 
        {
            console.log(key)
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
