import { Component, OnInit } from '@angular/core';
import { Supplier } from '../model/supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-buscar-supplier',
  templateUrl: './buscar-supplier.component.html',
  styleUrls: ['./buscar-supplier.component.css']
})
export class BuscarSupplierComponent implements OnInit {

  suppliersGroup :Supplier[];

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.supplierService.getSuppliersList().subscribe(suppliersGroup=>this.suppliersGroup=suppliersGroup);
  }

}
