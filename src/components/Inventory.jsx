import React from "react";
import { InventoryHeader } from "./InventoryHeader";
import { InventoryItems } from "./InventoryItem";

export function Inventory ({ inventoryHeaders,inventoryItems }) 
{
    
    return (
        <section class="inventory">
            <InventoryHeader inventoryHeaders={ inventoryHeaders } />
            {
                inventoryItems.map((row) => (
                    <InventoryItems key={row.id} inventoryHeaders={inventoryHeaders} inventoryItems={row} />
                ))
            }
        </section>
    );
}