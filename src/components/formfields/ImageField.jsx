import {React, useEffect, useRef, useState} from 'react'

export  function ImageField({name, id, message}) 
{
    const [image, setImage] = useState("");
    console.log(image);
    const fileImageBrowse = function (event) 
    {
        if (event.target.files && event.target.files[0]) {
            setImage({
              image: URL.createObjectURL(event.target.files[0])
            });
          }
    }
    return (
                          
            <div className="inventoryImageField">
                <label htmlFor={name}></label>
                <input className="inventoryField" type="file" name={name} id={id} accept="image/*" value={image} onChange={ fileImageBrowse } />
                <img className="inventoryImage" src={image}  />
            </div>
                          
    );
}
