import { Component, OnInit } from '@angular/core';
import { Supplier } from '../model/supplier';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-supplier',
  templateUrl: './buscar-supplier.component.html',
  styleUrls: ['./buscar-supplier.component.css']
})
export class BuscarSupplierComponent implements OnInit {

  suppliersGroup: Supplier[];

  constructor(private supplierService: SupplierService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.supplierService.getSuppliersList().subscribe(suppliersGroup => this.suppliersGroup = suppliersGroup);
  }
  private myFunction(): void {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");


    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  private verPerfil(codigo: number): void {

    window.location.href = "/verSupplier/" + codigo + "/" + this.route.snapshot.params.id


  }

}



