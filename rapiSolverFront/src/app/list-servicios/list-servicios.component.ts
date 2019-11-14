import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { UsuarioService } from '../usuario.service';
import { Detalle } from '../model/detalle';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-servicios',
  templateUrl: './list-servicios.component.html',
  styleUrls: ['./list-servicios.component.css']
})
export class ListServiciosComponent implements OnInit {

  detallesGroup :Detalle[];
  servicioNombre="";

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.servicioService.getDetallesList().subscribe(detallesGroup=>this.detallesGroup=detallesGroup);
  }
  private myMethod(codigo:number):void
{
  window.location.href="/detalleServicio/2"

}

private buscarByNombre():void
{
  this.detallesGroup=null;
  this.servicioService.getDetallesByServiceName(this.servicioNombre).subscribe(detallesGroup=>this.detallesGroup=detallesGroup);
}


}
