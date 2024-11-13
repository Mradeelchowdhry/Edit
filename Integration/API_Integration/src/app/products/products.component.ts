import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
myproducts:any[] = [];
constructor(private http:HttpClient){
this.getProduct();
}
 
getProduct(){
  this.http.get("http://localhost:5204/api/Product").subscribe((resuilt:any)=>{
    this.myproducts = resuilt;
    console.log(resuilt);
  })
}


EditProduct(product:any){
  this.http.put("http://localhost:5204/api/Product",product).subscribe((result:any)=>{
  if(result != null){
alert("Product Edit successfully.");
location.href="/";
  }
  })
  
}
  

DeleteProduct(product:any){
  this.http.delete("http://localhost:5204/api/Product?id="+product.id).subscribe((result:any)=>{
 alert("Product Delted successfully.");
this.getProduct();
console.log(result);

   })
  
}


}
