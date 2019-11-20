import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { AgregarServicioComponent } from './agregar-servicio/agregar-servicio.component';
import { BuscarSupplierComponent } from './buscar-supplier/buscar-supplier.component';
import { VerSupplierComponent } from './ver-supplier/ver-supplier.component';
import { AgregarReservaComponent } from './agregar-reserva/agregar-reserva.component';


const routes: Routes = [
  {path:'', redirectTo:'servicios', pathMatch:'full'},
  {path:'listarServicios/:id', component: ListServiciosComponent},
  {path:'detalleServicio/:id/:id2', component: DetalleServicioComponent},
  {path:'agregarServicio/:id', component: AgregarServicioComponent},
  {path:'buscarSupplier/:id', component: BuscarSupplierComponent},
  {path:'verSupplier/:id/:id2', component: VerSupplierComponent},
  {path:'agregarReserva/:id/:id2', component: AgregarReservaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
