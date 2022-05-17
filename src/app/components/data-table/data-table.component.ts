import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service'


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  products: Product[]=[]
  errMessage: string=''
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>{
      this.products=data
    },Error=> this.errMessage=Error)
  }

}
