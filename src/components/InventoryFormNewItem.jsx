import React, { useRef } from 'react'
import { InputField } from './InputField';

export function InventoryForm({ inventoryFields, inventoryItems } ) 
{


  function handleSendRegistry() 
  {
      
  }
  function handleRemoveRegistry() 
  {
      
  }
  return (
    <form class="inventoryForm scroll_enabled">
      {
        inventoryFields.map((field) =>(
          <InputField fieldData={field} value={inventoryItems[field.key]} />
        ))
      }
      <button class="buttonWrapper greenBtn" onClick={handleSendRegistry}>Enviar</button>
      <button class="buttonWrapper greenBtn" onClick={handleRemoveRegistry}>Enviar</button>
    </form>
  )
}
