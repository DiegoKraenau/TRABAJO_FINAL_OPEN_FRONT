import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { Detalle } from '../model/detalle';
import { DetalleServicioComponent } from '../detalle-servicio/detalle-servicio.component';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-agregar-reserva',
  templateUrl: './agregar-reserva.component.html',
  styleUrls: ['./agregar-reserva.component.css']
})
export class AgregarReservaComponent implements OnInit {

  reserva: Reservation=new Reservation();

  d1:Detalle=new Detalle();

  servicioId:number;

  supplierId:number;
  
  
  constructor(private detalleService: ServicioService,private reservationService: ReservationService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.detalleService.getDetalleById(parseInt(this.route.snapshot.params.id2)).subscribe(d1=>this.servicioId=d1.servicioId);
    this.detalleService.getDetalleById(parseInt(this.route.snapshot.params.id2)).subscribe(d1=>this.supplierId=d1.supplierId);
  }

  registrarReserva(){
    this.reserva.servicioId=this.servicioId;
    this.reserva.usuarioId=parseInt(this.route.snapshot.params.id);
    this.reserva.supplierId=this.supplierId;


    this.reservationService.createReservation(this.reserva)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.reserva= new Reservation();
   
    document.getElementById('mensaje2').style.display ='block'
    document.getElementById('mensaje').innerHTML = 'Se agregó la reserva con exito.';

  }
  private miPerfil():void
  {

    window.location.href="/miPerfil/"+this.route.snapshot.params.id

  
  }

  private publicarServicio():void
  {

    window.location.href="/agregarServicio/"+this.route.snapshot.params.id

  
  }

  private buscarServicio():void
  {

    window.location.href="/listarServicios/"+this.route.snapshot.params.id

  
  }

  private buscarProveedor():void
  {

    window.location.href="/buscarSupplier/"+this.route.snapshot.params.id

  
  }


}
