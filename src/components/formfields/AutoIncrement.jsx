import {React, useRef} from 'react'

export function AutoIncrement({value, placeHolder}) 
{
  const ref = useRef(); 
   
  return (
     <input class="inventoryField" ref={ref} type="number" value={value} placeholder={placeHolder} />
  )
}
