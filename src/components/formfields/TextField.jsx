import {React, useEffect, useRef, useState} from 'react'

export function TextField({name,id,placeholder, updateFormItem}) 
{
  const [input, setInput] = useState(null)
  const inputRef = useRef('')

 useEffect(() => {
   inputRef.current = input;
   updateFormItem(name, inputRef.current)
 },[input])

  return (
      <>
      <input class="inventoryField"  type="text" name={name} id={id} onChange={(e) => setInput(e.target.value)}  placeholder={placeholder} />
      <label htmlFor={name}>{inputRef.current}</label>
      </>
  )
}
