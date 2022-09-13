//capa de abstracción, metodos que vamos a implementar en la capa de datos
//abstrayendose del tipo de base de datos

import { UserEntity } from "./user.entity"

//metodos en los que no interesa con que capa o servicio estén conectando
export interface UserRepository{
    findUserById(uuid:string):Promise<UserEntity | null>    //recibe un id y retorna el User ó null
    registerUser(user:UserEntity):Promise<UserEntity | null> //recibe los datos para crear y retorna el User
    listUser():Promise<UserEntity[] | null>    //retorna un array de Users
}