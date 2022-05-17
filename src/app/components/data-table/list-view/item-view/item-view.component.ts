import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
@Input() productItem: Product | null =null
  constructor(private service: ProductService, private router:Router) { }

  ngOnInit(): void {
  }
  onDelete(p:Product){
    let v = confirm("delete this item?")
    if(v){
      this.service.deleteProduct(p).subscribe()
      alert(" the product item deleted successfully")
    }
      
  }
  onEditProduct(p: Product){
    this.router.navigateByUrl('/editproduct/'+p.id)

  }
}
