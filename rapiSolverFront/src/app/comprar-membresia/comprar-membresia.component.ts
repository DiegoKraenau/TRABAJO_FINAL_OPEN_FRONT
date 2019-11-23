import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-comprar-membresia',
  templateUrl: './comprar-membresia.component.html',
  styleUrls: ['./comprar-membresia.component.css']
})
export class ComprarMembresiaComponent implements OnInit {

  constructor(private route: ActivatedRoute,private usuarioService: UsuarioService,private customerService: CustomerService) { }

  ngOnInit() {
  }

  comprarMembresiA(){
    this.usuarioService.findByUserId(this.route.snapshot.params.id).subscribe(
      data=>{
        if(data.rolId==2){
          document.getElementById('mensaje4').style.display ='block'
          document.getElementById('mensaje3').innerHTML = 'El paquete de membresia ya esta en uso.';
        }
        if(data.rolId==1){
          this.customerService.comprarMembresia(this.route.snapshot.params.id).subscribe(data=>console.log(data));
          document.getElementById('mensaje2').style.display ='block'
          document.getElementById('mensaje').innerHTML = 'Se adquirió el paquete de membresia exitosamente.';
        }

      }
    );

  }
}
