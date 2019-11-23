import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { Customer } from '../model/customer';
import { Supplier } from '../model/supplier';
import { UsuarioService } from '../usuario.service';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-editar-miperfil',
  templateUrl: './editar-miperfil.component.html',
  styleUrls: ['./editar-miperfil.component.css']
})
export class EditarMiperfilComponent implements OnInit {

  id: number;
  user: Usuario = new Usuario();
  cliente: Customer = new Customer();
  supplier: Supplier = new Supplier();

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService, 
    private supplierService: SupplierService) {
      

      

  }

  ngOnInit() {
   /* this.id = this.route.snapshot.params['id'];

    this.usuarioService.findByUserId(this.id)
    .subscribe(  data =>{
      console.log(data)
      this.user = data;
    }, error=>console.log(error));
    */
  }




}
