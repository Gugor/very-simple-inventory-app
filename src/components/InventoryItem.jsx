import React from "react";

export function InventoryItems({inventoryHeaders,inventoryItems}) 
{
    let dataKeys = []
    for(var key in inventoryHeaders) 
    {
      if(inventoryHeaders.hasOwnProperty(key)) 
      {
        dataKeys.push(key);
      }
    }
    let rowData = []
    for(var i= 0; i < dataKeys.length; i++) 
    {
      rowData.push(inventoryItems[dataKeys[i]]);
    }
  return (
    <div class="inventoryTableRow">
        {
          rowData.map((cell)=>(
            <div class="inventoryCell">{cell}</div>
          ))
        }
    </div>
  )
}
