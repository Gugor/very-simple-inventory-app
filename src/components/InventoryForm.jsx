import React from 'react'
import { InputField } from './InputField';

export function InventoryForm({ inventoryFields, inventoryItems } ) 
{
  console.log(inventoryFields);
  return (
    <section class="inventoryForm">
      {
        inventoryFields.map((field) =>(
          <InputField fieldData={field} value={inventoryItems[field.key]} />
        ))
      }
    </section>
  )
}
