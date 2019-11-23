import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { Usuario } from '../model/usuario';
import { Role } from '../model/role';
import { CustomerService } from '../customer.service';
import { LocationService } from '../location.service';
import { UsuarioService } from '../usuario.service';
import { RoleService } from '../role.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  cliente: Cliente = new Cliente();

  constructor(private customerService: CustomerService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario.rolId = 1;
  }

  registrarUsuario(){
    this.usuarioService.createUsuario(this.usuario).subscribe(
      datos=>{
        console.log(datos);
        this.customerService.createCustomer(this.cliente).subscribe(data=>console.log(data));
    },error=>console.log(error))
    this.usuario = new Usuario();
    this.cliente = new Cliente();
  }
}
