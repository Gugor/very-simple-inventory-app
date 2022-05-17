import React, { useState } from 'react'
import { InputField } from './InputField';
import {v4 as  uuidv4 } from 'uuid';
export function InventoryForm({ inventoryFields, inventoryItems, setInventoryItems } ) 
{
 
  const [inventoryState, setInventoryState ] = useState( inventoryItems);

  const [formState, setFormState] = useState();
  const updateFormItem = function(key,value) 
  {
     setFormState(prevFormState => {
       console.log('Froms state:' + prevFormState)
       const states = prevFormState || []
       console.log(key + ":" + value)
       states[key] = value
       console.log(states)
       return states
    })
    console.log("Frm Ste: " + formState);
  }
  const handleOnChange = (e) => {
    e.target.id = uuidv4();
  }

  const handleSendRegistry = (e) => {
    e.preventDefault()
    console.log('Send Registry');
    console.log(formState);
  }
  return (
    <form className="inventoryForm scroll_enabled " onSubmit={handleSendRegistry}>
      <h1>Update Inventory</h1>
      {
        inventoryFields.map((field) =>(
          <InputField key={field.id} fieldData={field} updateFormItem={updateFormItem}/>
        ))
      }
      <button className="buttonWrapper greenBtn" onClick={handleSendRegistry}>Enviar</button>
    </form>
  )
}
