import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  customer = new Customer();

  constructor(private route: ActivatedRoute,private customerService: CustomerService) { }

  ngOnInit() {
  }


  registrarUsuario(){
  
    this.customerService.createCustomer(this.customer)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.customer= new Customer();
    document.getElementById('mensaje2').style.display ='block'
     document.getElementById('mensaje').innerHTML = 'Se acaba de registrar con exito , si desea inicie sesion.';
                 

  }
}
