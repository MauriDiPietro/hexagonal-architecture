//acá va la clase que se encarga de mapear los datos que van a representar la entidad 
//(la entidad es la interface que hace referencia a lo que se va a guardar en la base de datos)
//genera un objeto con los datos que recibe de http

import { v4 as uuidv4 } from 'uuid';
import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity{
    uuid: string;
    name: string;
    email: string;
    description: string;
    
    constructor({name, email, description}:{name:string, email:string, description:string}){    //recibe lo que envía el negocio
        this.uuid = uuidv4(); //para abstraerse del id que genera la base de datos
        this.name = name;
        this.email = email;
        this.description = description;
    }
}