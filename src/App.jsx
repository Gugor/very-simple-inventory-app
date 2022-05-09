import React, {Fragment, useState, useRef} from 'react';
import {v4 as  uuidv4 } from 'uuid';
import './App.css';
import { Inventory } from './components/Inventory';
import { InventoryForm } from './components/InventoryForm';
import { MenuApp } from './components/MenuApp';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { ButtonAdd } from './components/ButtonAdd';

function App() 
{
  const [inventoryItems, setInventoryItem] = useState([
    {id:uuidv4(), inventoryCode:"0001", objectName:"Alfombra pequeña de Oración", country:"Iran", acquisitionDate: Date(), dimensions: "100x90cm", description:"Es una alfombra de oración voladora con conexión wifi al cielo", value:900, currency:'€'  },
    {id:uuidv4(), inventoryCode:"0002", objectName:"Tasbih de shamatsu", country: "Uzbekistan", acquisitionDate: Date(), dimensions: "42cm", description:"Tasbih 99 mil", value:120, curency:"€"  }
  ])

  const handleAddItem = function (items)  
  {
    setInventoryItem((prevItems) =>{
        return []
    }  );
  }

  const apptitle = "Inventario Cal y Arena";
  return (
    //Reat Just needs main app to be return inside an unique element, that's why Fragment is required.
    <Fragment>
      <Header title={ apptitle } />
      <div class="appWrapper">
        <MenuApp />
        <section class="contentSection">
          <InventoryForm inventoryItem= { inventoryItems[0]} />
          <div class="inventorySection">
            <div class="topSection">
              <ButtonAdd handleAddItem={ handleAddItem } />
              <Search />
            </div>
            <Inventory inventoryItems={ inventoryItems } />
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
