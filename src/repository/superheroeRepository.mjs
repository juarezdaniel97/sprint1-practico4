import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroeDataSource from './superheroeDataSource.mjs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.basename(__filename);


export default class SuperheroeRepository extends SuperheroeRepository{

    constructor(){
        super();
        this.filePath = path.join(__dirname,'../superheroe.txt');
    }

    obtenerTodos(){
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data) //Convierte el archivo en un array de objetos js
    }

}