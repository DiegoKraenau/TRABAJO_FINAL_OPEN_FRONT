import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { AgregarServicioComponent } from './agregar-servicio/agregar-servicio.component';
import { BuscarSupplierComponent } from './buscar-supplier/buscar-supplier.component';
import { VerSupplierComponent } from './ver-supplier/ver-supplier.component';



const routes: Routes = [
  {path:'', redirectTo:'servicios', pathMatch:'full'},
  {path:'listarServicios', component: ListServiciosComponent},
  {path:'detalleServicio/:id', component: DetalleServicioComponent},
  {path:'agregarServicio/:id', component: AgregarServicioComponent},
  {path:'buscarSupplier/:id', component: BuscarSupplierComponent},
  {path:'verSupplier/:id/:id2', component: VerSupplierComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
