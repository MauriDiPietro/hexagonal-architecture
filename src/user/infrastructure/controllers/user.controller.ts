import { Request, Response } from 'express';
import { UserUseCase } from '../../application/userUseCase';


export class UserController {
    constructor(private userUseCase: UserUseCase){

    }

    public getController = async({params}: Request, res: Response)=>{
        const { uuid } = params;
        const user = await this.userUseCase.getDetailUser(uuid);
        res.json(user);
    }

    public insertController = async ({body}: Request, res: Response)=>{
        const user = await this.userUseCase.registerUser(body);
        res.json(user)
    }
}