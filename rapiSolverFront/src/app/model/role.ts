import { Usuario } from './usuario';

export class Role {
    id:number;
    rolDescription:string;
    publish:string;
    usuarios:Usuario[];
}
