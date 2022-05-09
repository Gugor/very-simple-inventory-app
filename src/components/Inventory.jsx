import React from "react";
import { InventoryItem } from "./InventoryItem";

export function Inventory ({ inventoryItems }) 
{
    
    return (
        <section class="inventory">
            {
                inventoryItems.map((item) => (
                    <InventoryItem item={item} />
                ))
            }
        </section>
    );
}