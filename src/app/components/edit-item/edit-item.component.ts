import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  productId:number
  constructor( private activatedRoute: ActivatedRoute, private service:ProductService,
    private fb:FormBuilder) { 
  this.productId=activatedRoute.snapshot.params.id
  }
  productFormGroup!:FormGroup 
  ngOnInit(): void {
    this.service.getProduct(this.productId).subscribe(
      product=>{
        this.productFormGroup=this.fb.group({
          id:[product.id,Validators.required],
          name:[product.name,Validators.required],
          price:[product.price,Validators.required],
          quantity:[product.quantity,Validators.required],
          selected:[product.selected,Validators.required],
          available:[product.available,Validators.required],
        })
      }
    )
  }
  onEditProduct(){
    this.service.updateProduct(this.productFormGroup.value)
    .subscribe(data=>{
      alert("Success Product updated")
    })
  }

  

}
