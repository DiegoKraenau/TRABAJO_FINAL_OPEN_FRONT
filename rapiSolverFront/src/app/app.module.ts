import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { AgregarServicioComponent } from './agregar-servicio/agregar-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListServiciosComponent,
    DetalleServicioComponent,
    AgregarServicioComponent
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
