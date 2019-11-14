import { Component, OnInit } from '@angular/core';
import { Servicio } from '../model/servicio';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from '../model/supplier';
import { Recommendation } from '../model/recommendation';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'app-ver-supplier',
  templateUrl: './ver-supplier.component.html',
  styleUrls: ['./ver-supplier.component.css']
})
export class VerSupplierComponent implements OnInit {

  grupoServicios :Servicio[];
  supplier:Supplier=new Supplier();
  grupoRecomendaciones: Recommendation[];
  recommendation: Recommendation=new Recommendation();

  constructor(private supplierService: SupplierService,private route: ActivatedRoute,private recommendationService: RecommendationService) { }

  ngOnInit() {
    this.loadData();
    this.loadData2();
    this.loadData3();
  }

  private openPage(pageName,elmnt,color):void
{
  var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
            }
          tablinks = document.getElementsByClassName("tablink");
          for (i = 0; i < tablinks.length; i++) {
              tablinks[i].style.backgroundColor = "";
            }
           document.getElementById(pageName).style.display = "block";
        
}

loadData(){
  this.supplierService.getServiciosListByUserId(parseInt(this.route.snapshot.params.id)).subscribe(grupoServicios=>this.grupoServicios=grupoServicios);
  
}

loadData2(){
  this.supplierService.getSupplierByUserId(parseInt(this.route.snapshot.params.id)).subscribe(supplier=>this.supplier=supplier);
  
}
loadData3(){
  this.recommendationService.getRecommendationsByUserId(parseInt(this.route.snapshot.params.id)).subscribe(grupoRecomendaciones=>this.grupoRecomendaciones=grupoRecomendaciones);
  
}

registrarRecomendacion(){
  this.recommendation.supplierId=parseInt(this.route.snapshot.params.id);
  this.recommendation.usuarioId=parseInt(this.route.snapshot.params.id2);
  console.log(this.recommendation);
  this.recommendationService.crearRecomendacion(this.recommendation)
  .subscribe(datos=>console.log(datos), error=>console.log(error));
  this.recommendation= new Recommendation();

}



}
