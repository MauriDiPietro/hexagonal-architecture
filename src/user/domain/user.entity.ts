export interface UserEntity{    //propiedades importantes para el negocio, abstrayendose de la infraestructura
    uuid: string;
    name: string;
    email: string;
    description: string;
}