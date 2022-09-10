//acá va la clase que se encarga de mapear los datos que van a representar la entidad 
//(la entidad es la interface que hace referencia a lo que se va a guardar en la base de datos)

import {v4 as uuid} from 'uuid';
import { UserEntity } from "./user.entity";

export class UserValue implements UserEntity{
    uuid: string;
    name: string;
    email: string;
    description: string;
    
    constructor({name, email, description}:{name:string, email:string, description:string}){    //lo que envía el negocio
        this.uuid = uuid(); //para abstraerse del id que genera la base de datos
        this.name = name;
        this.email = email;
        this.description = description;
    }
}