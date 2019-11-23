import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { CustomerService } from '../customer.service';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';
import { Customer } from '../model/customer';
import { Supplier } from '../model/supplier';
import { Servicio } from '../model/servicio';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  esCustomer: boolean = true;
  usuario = new Usuario();
  customer = new Customer();
  supplier = new Supplier();
  grupoServicios: Servicio[];
  grupoReservations: Reservation[];
  rolId: number;

  constructor(private route: ActivatedRoute, private router: Router, private supplierService: SupplierService, private customerService: CustomerService, private usuarioService: UsuarioService, private reservationService: ReservationService) { }

  ngOnInit() {
    this.loadData();
    
  }

  loadData() {

    this.usuarioService.findByUserId(this.route.snapshot.params.id).subscribe(
      data => {
        if (data.rolId == 1) {
          this.customerService.findByUserId(data.id).subscribe(customer => this.customer = customer);
          document.getElementById('mensaje').innerHTML = 'Usted es una cliente no tiene servicios';
          document.getElementById('reservaMensaje').innerHTML = 'Reservas hechas:';
          document.getElementById('mensajeMembresia').innerHTML = 'No posee una membresia';
        }
        if (data.rolId == 2) {
          this.supplierService.findByUserId(data.id).subscribe(
            customer => {
              this.customer = customer;
              this.supplierService.getServiciosListByUserId(data.id).subscribe(grupoServicios => this.grupoServicios = grupoServicios);
              this.reservationService.findByUserId(data.id).subscribe(grupoReservations => this.grupoReservations = grupoReservations);
            }
          );
          document.getElementById('mensaje').innerHTML = 'Los servicios que proveo:';
          document.getElementById('reservaMensaje').innerHTML = 'Reservas hechas y solicitadas:';
          document.getElementById('mensajeMembresia').innerHTML = 'Su membresia se vence en 6 meses';
        }
      }




    );
  }

  updatePerfil(){
    /*this.usuarioService.findByUserId(this.route.snapshot.params['id']).subscribe(datos=>this.rolId=datos.rolId);
    if (this.rolId == 1){
      this.customerService.findByUserId(this.route.params['id']).subscribe(c=>this.customer=c);
      this.router.navigate(['editarmiperfil',this.customer.id]);
    }else{
      this.supplierService.findByUserId(this.route.params['id']).subscribe(sup=>this.supplier=sup);
      this.router.navigate(['editarmiperfil',this.supplier.id]);
    }*/
    this.router.navigate(['editarmiperfil',this.route.snapshot.params['id']])
  }
}
