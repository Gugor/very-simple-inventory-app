import React, {Fragment, useState, useRef} from 'react';
import {v4 as  uuidv4 } from 'uuid';
import './App.css';
import { Inventory } from './components/Inventory';
import { InventoryForm } from './components/InventoryForm';
import { MenuApp } from './components/MenuApp';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { ButtonAdd, ButtonOpenNewItem } from './components/formfields/ButtonOpenNewItem';

function App() 
{
  const inventoryFormFields = [
    {id:uuidv4(),order:0,fieldName:'Imagen Objeto', key:"objectImage",type:"image",placeholder:"Imagen del Objeto...", content:[], patern:"", required:false},
    {id:uuidv4(),order:1,fieldName:'Codigo Inventario', key:"inventoryCode",type:"autoincrement",placeholder:"Código del Objeto...", content:[], patern:"^[0-9]{5}", required:true},
    {id:uuidv4(),order:2,fieldName:'Nombre del Objeto', key:"objectName",type:"text",placeholder:"Nombre del Objeto", content:[], patern:"", required:true},
    {id:uuidv4(),order:3,fieldName:'Destino', key:"destiny",type:"select",placeholder:"Destino.Ej:\"S\"", content:['S','T','O'], patern:"", required:false},
    {id:uuidv4(),order:4,fieldName:'País', key:"country",type:"select",placeholder:"País", content:['Irán','Uzbekistán','Turkía','España','UK'], patern:"", required:false},
    {id:uuidv4(),order:5,fieldName:'Dimensiones', key:"dimensions",type:"text",placeholder:"Ej: 100x200cm", content:[], patern:"", required:false},
    {id:uuidv4(),order:6,fieldName:'Descripción', key:"description",type:"textArea",placeholder:"Descripción...", content:[], patern:"", required:false},
    {id:uuidv4(),order:7,fieldName:'Valor', key:"value",type:"number",placeholder:"0", content:[]},
    {id:uuidv4(),order:8,fieldName:'Precio', key:"price",type:"price",placeholder:"", content:[{currency:'EUR',symbol:"€"},{currency:'USD',symbol:"$"}], patern:"", required:false},
  ]
  

  const inventoryHeaders = {objectImage:"Imagen",inventoryCode:"Código Inventario",objectName:"Nombre del Objeto",destiny:"Destino",dimensions:"Dimensiones"};
  const [inventoryItems, setInventoryItems] = useState([
    {id:uuidv4(), inventoryCode:"0001", objectName:"Alfombra pequeña de Oración",destiny:"S", country:"Iran", acquisitionDate: Date(), dimensions: "100x90cm", description:"Es una alfombra de oración voladora con conexión wifi al cielo", value:900, currency:'€'  },
    {id:uuidv4(), inventoryCode:"0002", objectName:"Tasbih de shamatsu", destiny:"T",country: "Uzbekistan", acquisitionDate: Date(), dimensions: "42cm", description:"Tasbih 99 mil", value:120, currency:"€"  }
  ])
  const newForm = [];
 

  const apptitle = "Inventario Cal y Arena";
  return (
    //Reat Just needs main app to be return inside an unique element, that's why Fragment is required.
    <Fragment>
      <Header title={ apptitle } />
      <div class="appWrapper">
        <MenuApp />
        <section class="contentSection">
          <InventoryForm inventoryFields={ inventoryFormFields } inventoryItems= { inventoryItems} setInventoryItems={setInventoryItems} />

          <div class="inventorySection">
            <div class="topSection">
              <ButtonOpenNewItem inventoryForm={ newForm }  />
              <Search />
            </div>
            <Inventory inventoryHeaders={ inventoryHeaders } inventoryItems={ inventoryItems } />
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default App;
