import { join, dirname } from 'path';
import { LowDB, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname,'db.json');
const adapter = new JSONFile(file);
const db = LowDB(adapter);

await db.read();

db.data ||= { objects: [] }

function getObjects() 
{
    return db.data;
}

function filterObjectsByField( field, value ) 
{
    return db.data.filter((object) => {
        if(object[field] === value ) 
        {
            return object;
        }
    })
}


await DataView.write();