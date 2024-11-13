import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
 id:any=0;
 product:any={
   id:0,
  name: "",
  description: "",
  price:0,
  brandId: 0,
}

myBrands:any[]=[];

constructor(private http:HttpClient,private route:ActivatedRoute){
this.getBrands();
this.getProductDetails();
}
getBrands(){
  this.http.get("http://localhost:5204/api/Brand").subscribe((result:any)=>{
    this.myBrands = result;
    console.log(result);
  })
}

getProductDetails(){
  this.id = this.route.snapshot.paramMap.get("id");
  this.http.get("http://localhost:5204/api/Product/"+this.id).subscribe((result:any)=>{
  this.product.id=this.id;
  this.product.name=result.name;
  this.product.description=result.description;
  this.product.price=result.price;
  this.product.brandId=result.brandId;

console.log(result);

  })

}

EditProduct(product:any){
  this.http.put("http://localhost:5204/api/Product",product).subscribe((result:any)=>{
  if(result != null){
alert("Product edited successfully.");
location.href="/";
  }
  })
  
}

  










};



 