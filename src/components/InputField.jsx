import { React, useRef} from 'react'
import { AutoIncrement } from './formfields/AutoIncrement';
import { ImageField } from './formfields/ImageField';
import { TextArea } from './formfields/TextArea';
import { TextField } from './formfields/TextField';

export function InputField({fieldData, value, onChange, updateFormItem}) 
{
    const inputType = fieldData.type;
    const content = fieldData.content;


    if ( inputType === "text") 
    {
           console.log('Field Data InpText')
           console.log(fieldData)
           return <TextField value={value} fieldData={fieldData} name={fieldData.key} id={fieldData.key} updateFormItem={updateFormItem} placeholder={fieldData.placeholder} />
    }
    if ( inputType === "number") 
    {
           return <AutoIncrement value={value} name={fieldData.key} id={fieldData.key} updateFormItem={updateFormItem}placeholder={fieldData.placeholder} />
    }
    if ( inputType === "autoincrement" ) 
    {
           const autoincrement = function () { /*Database call, get biggest number from given field*/}
           return <input className="inventoryField" onChange={onChange} type="number" value={value} updateFormItem={updateFormItem}placeholder={fieldData.placeholder} />
    }
    if ( inputType === "textArea" ) 
    {
           return <TextArea value={value} fieldData={fieldData} name={fieldData.key} id={fieldData.key} updateFormItem={updateFormItem} placeholder={fieldData.placeholder} />
    }
    if ( inputType === "image" ) 
    {
           return <ImageField value={value} name={fieldData.key} id={fieldData.key} updateFormItem={updateFormItem}/>
    }
    if ( inputType === "file") 
    {
           return <input className="inventoryField"  type="file" value={value} updateFormItem={updateFormItem}placeholder={fieldData.placeholder} />
    }
    if ( inputType === "time") 
    {
           return <input  className="inventoryField" type="time" updateFormItem={updateFormItem}placeholder={fieldData.placeholder} />
    }
    if ( inputType === "url") 
    {
           return <input className="inventoryField"  type="url" value={value} updateFormItem={updateFormItem}placeholder={fieldData.placeholder} />
    }

    if ( inputType === "email") 
    {
           return <input className="inventoryField"  type="email" value={value} updateFormItem={updateFormItem}placeholder={fieldData.placeholder} />
    }
    if ( inputType === "color") 
    {
           return <input className="inventoryField"  type="color" value={value} updateFormItem={updateFormItem}placeholder={fieldData.placeholder} />
    }
    if ( inputType === "select") 
    {
           return (
            <select className="inventoryField"  type="select" updateFormItem={updateFormItem} >
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
               <div className="currencyField">
                   <input className="inventoryField" type="number" placeholder="Ej: 100" />
                    <select className="inventoryField" type="select" >
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
