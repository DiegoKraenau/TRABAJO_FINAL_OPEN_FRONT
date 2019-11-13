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
<<<<<<< HEAD
import { VerSupplierComponent } from './ver-supplier/ver-supplier.component';
=======
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
>>>>>>> 466aeea76e1829eb1a275b45f85547d23a1ad591

@NgModule({
  declarations: [
    AppComponent,
    ListServiciosComponent,
    DetalleServicioComponent,
    AgregarServicioComponent,
    BuscarSupplierComponent,
<<<<<<< HEAD
    VerSupplierComponent
=======
    MiPerfilComponent
>>>>>>> 466aeea76e1829eb1a275b45f85547d23a1ad591
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
