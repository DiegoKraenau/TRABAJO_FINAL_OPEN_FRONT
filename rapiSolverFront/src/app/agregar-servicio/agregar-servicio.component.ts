import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../categoria.service';
import { Detalle } from '../model/detalle';
import { ServicioService } from '../servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.css']
})
export class AgregarServicioComponent implements OnInit {

  categoryGroup :Categoria[];
  detalle: Detalle=new Detalle();

  constructor(private categoriaService: CategoriaService,private servicioService: ServicioService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.categoriaService.getCategoryList().subscribe(categoryGroup=>this.categoryGroup=categoryGroup);
  }

  registrarDetalle(){
    this.detalle.usuarioId=parseInt(this.route.snapshot.params.id);
    console.log(this.detalle);
    this.servicioService.createCliente(this.detalle)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.detalle= new Detalle();

  }
  
  }


