import { Component, OnInit } from '@angular/core';
import { Detalle } from '../model/detalle';
import { ServicioService } from '../servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  d1 :Detalle=new Detalle();
  

  constructor(private servicioService: ServicioService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.servicioService.getDetalleById(parseInt(this.route.snapshot.params.id)).subscribe(d1=>this.d1=d1);
  }

  private verPerfil(codigo:number):void
  {

    window.location.href="/verSupplier/"+codigo+"/"+this.route.snapshot.params.id2

  
  }

  private agregarReserva(codigo:number):void
  {

    window.location.href="/agregarReserva/"+this.route.snapshot.params.id2+"/"+codigo

  
  }
 

}
