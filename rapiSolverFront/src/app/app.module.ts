import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { AgregarServicioComponent } from './agregar-servicio/agregar-servicio.component';
import { BuscarSupplierComponent } from './buscar-supplier/buscar-supplier.component';
import { VerSupplierComponent } from './ver-supplier/ver-supplier.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { AgregarReservaComponent } from './agregar-reserva/agregar-reserva.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { EditarMiperfilComponent } from './editar-miperfil/editar-miperfil.component';
import { IndexComponent } from './index/index.component';
import { ModificarServicioComponent } from './modificar-servicio/modificar-servicio.component';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    ListServiciosComponent,
    DetalleServicioComponent,
    AgregarServicioComponent,
    BuscarSupplierComponent,
    VerSupplierComponent,
    VerPerfilComponent,
    AgregarReservaComponent,
    MiPerfilComponent,
    BarraNavegacionComponent,
    RegistroUsuarioComponent,
    LoginUsuarioComponent,
    EditarMiperfilComponent,
    IndexComponent,
    ModificarServicioComponent,
    PrincipalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
