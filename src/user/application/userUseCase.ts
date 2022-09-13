import { UserRepository } from "../domain/user.repository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
    //private readonly -> de manera privada en modo lectura
    //al insertar propiedades del repository en el constructor se llama inyección de dependencias 
    constructor(private readonly userRepository: UserRepository){

    }

    public registerUser = async({name, email, description}:{name:string, email:string, description:string}) =>{
        const userValue = new UserValue({name, email, description})   //retorna un objeto con los valores del usuario
        const userCreated = await this.userRepository.registerUser(userValue);
        return userCreated;
    }

    public registerUserAndNotify(){

    }

    public getDetailUser = async (uuid:string) => {
        const user = await this.userRepository.findUserById(uuid)
        return user
    }
} 