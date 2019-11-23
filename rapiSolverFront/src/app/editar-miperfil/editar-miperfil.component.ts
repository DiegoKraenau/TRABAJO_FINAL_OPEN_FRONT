import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { Customer } from '../model/customer';
import { Supplier } from '../model/supplier';
import { UsuarioService } from '../usuario.service';
import { SupplierService } from '../supplier.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-editar-miperfil',
  templateUrl: './editar-miperfil.component.html',
  styleUrls: ['./editar-miperfil.component.css']
})
export class EditarMiperfilComponent implements OnInit {

  id: number;
  rolId: number;
  user: Usuario = new Usuario();
  cliente: Customer = new Customer();
  supplier: Supplier = new Supplier();

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService, 
    private supplierService: SupplierService, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.usuarioService.findByUserId(this.id).subscribe(u=>this.user=u);
    this.rolId = this.user.rolId;
    if(this.rolId == 1){
      this.customerService.findByUserId(this.id).subscribe(c=>this.cliente=c);
    }else{
      this.supplierService.findByUserId(this.id).subscribe(s=>this.supplier=s);
    }
  }

  actualizar(){
    if(this.rolId == 1){
      this.customerService.updateCustomer(this.cliente.id,this.cliente).subscribe(data=>console.log(data), error=>console.log(error));
      this.cliente = new Customer();
    }else{
      this.supplierService.updateSupplier(this.supplier.id,this.supplier).subscribe(data=>console.log(data), error=>console.log(error));
      this.supplier = new Supplier();
    }
    this.router.navigate['/miPerfil/'+this.id];
  }

}
