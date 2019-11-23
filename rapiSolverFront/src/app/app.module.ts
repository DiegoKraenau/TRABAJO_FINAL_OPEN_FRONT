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
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';

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
    BarraNavegacionComponent,
    RegistroUsuarioComponent,
    LoginUsuarioComponent
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
