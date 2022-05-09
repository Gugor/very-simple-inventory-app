import React from "react";

export function InventoryItem({item}) 
{
    const { objectName, value , description} = item;
  return <div><span>{objectName}</span><span>{value}</span> <span>{description}</span></div>;
}
