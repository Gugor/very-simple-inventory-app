import React from 'react'
import { InventoryItems } from './InventoryItem';

export function InputField({fieldData, value}) 
{
    const inputType = fieldData.type;
    const content = fieldData.content;
    console.log(content);
    if ( inputType === "text") 
    {
           return <input class="inventoryField" type="text" value={value} placeholder={fieldData.placeholder} />
    }
    if ( inputType === "number") 
    {
           return <input class="inventoryField"type="number" value={value} placeholder={fieldData.placeholder} />
    }
    if ( inputType === "textArea") 
    {
           return <textarea class="inventoryField" type="text" value={value} placeholder={fieldData.placeholder} ></textarea>
    }
    if ( inputType === "image") 
    {
           return <input class="inventoryField" type="image" value={value} placeholder={fieldData.placeholder} />
    }
    if ( inputType === "file") 
    {
           return <input class="inventoryField" type="file" value={value} placeholder={fieldData.placeholder} />
    }
    if ( inputType === "time") 
    {
           return <input  class="inventoryField"type="time" placeholder={fieldData.placeholder} />
    }
    if ( inputType === "url") 
    {
           return <input class="inventoryField" type="url" value={value} placeholder={fieldData.placeholder} />
    }

    if ( inputType === "email") 
    {
           return <input class="inventoryField" type="email" value={value} placeholder={fieldData.placeholder} />
    }
    if ( inputType === "color") 
    {
           return <input class="inventoryField" type="color" value={value} placeholder={fieldData.placeholder} />
    }
    if ( inputType === "select") 
    {
           return (
            <select class="inventoryField" type="select" >
                {
                    content.map((opt) => (
                        <option value={opt}>{opt}</option>
                    ))
                }
            </select>  
           ) 
    }
    if ( inputType === "price") 
    {
           return (
               <div class="currencyField">
                   <input class="inventoryField" type="number" placeholder="Ej: 100" />
                    <select class="inventoryField" type="select" >
                        {
                            content.map((opt) => (
                                <option value={opt.symbol}>{ opt.currency }{" (" + opt.symbol +")"}</option>
                            ))
                        }
                    </select>  
               </div>
            
           ) 
    }

}
