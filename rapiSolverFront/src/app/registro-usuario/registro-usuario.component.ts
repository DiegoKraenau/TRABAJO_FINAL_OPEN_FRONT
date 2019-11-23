import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { Usuario } from '../model/usuario';
import { Role } from '../model/role';
import { CustomerService } from '../customer.service';
import { LocationService } from '../location.service';
import { UsuarioService } from '../usuario.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  customer: Customer = new Customer();
  location: Location = new Location();
  usuario: Usuario = new Usuario();

  constructor(private customerService: CustomerService, private locationService: LocationService, private usuarioService: UsuarioService, private rolService: RoleService) { }

  ngOnInit() {

  }

  registrarUsuario(){
    let rol = this.rolService.getRoleById(1);
  }
}
