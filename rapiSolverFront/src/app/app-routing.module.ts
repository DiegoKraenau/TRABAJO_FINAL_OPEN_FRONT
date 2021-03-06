import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { AgregarServicioComponent } from './agregar-servicio/agregar-servicio.component';
import { BuscarSupplierComponent } from './buscar-supplier/buscar-supplier.component';
import { VerSupplierComponent } from './ver-supplier/ver-supplier.component';
import { AgregarReservaComponent } from './agregar-reserva/agregar-reserva.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { EditarMiperfilComponent } from './editar-miperfil/editar-miperfil.component';
import { IndexComponent } from './index/index.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { ComprarMembresiaComponent } from './comprar-membresia/comprar-membresia.component';
import { ModificarServicioComponent } from './modificar-servicio/modificar-servicio.component';


const routes: Routes = [
  {path:'', redirectTo:'servicios', pathMatch:'full'},
  {path:'listarServicios/:id', component: ListServiciosComponent},
  {path:'detalleServicio/:id/:id2', component: DetalleServicioComponent},
  {path:'agregarServicio/:id', component: AgregarServicioComponent},
  {path:'buscarSupplier/:id', component: BuscarSupplierComponent},
  {path:'verSupplier/:id/:id2', component: VerSupplierComponent},
  {path:'agregarReserva/:id/:id2', component: AgregarReservaComponent},
  {path:'miPerfil/:id', component: MiPerfilComponent},
  {path:'login', component: LoginUsuarioComponent},
  {path: 'registro', component: RegistroUsuarioComponent},
  {path: 'editarmiperfil/:id', component: EditarMiperfilComponent},
  {path: 'index', component: IndexComponent},
  {path: 'agregarUsuario', component: AgregarUsuarioComponent},
  {path: 'comprarMembresia/:id', component: ComprarMembresiaComponent},
  {path: 'modificarServicio/:id/:id2', component: ModificarServicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
