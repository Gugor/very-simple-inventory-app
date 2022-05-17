import React, {useRef,useState, useEffect} from 'react'

export function TextArea({name,id,placeholder, updateFormItem})  
{
  const [input, setInput] = useState(null)
  const inputRef = useRef('')

 useEffect(() => {
   inputRef.current = input;
   updateFormItem(name, inputRef.current)
 },[input])

  return (
    <div>
        <textarea className="inventoryField"  type="text" id={id} name={name} onChange={(e) => setInput(e.target.value)}  placeholder={placeholder} ></textarea>
        <label htmlFor={name}>{inputRef.current}</label>
    </div>
  )
}
