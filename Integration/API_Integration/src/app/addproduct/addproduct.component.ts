import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
product:any={
   
  name: "",
  description: "",
  price:0,
  brandId: 0,
}

myBrands:any[]=[];
constructor(private http:HttpClient){
  this.getBrands();
  }
  
  getBrands(){
    this.http.get("http://localhost:5204/api/Brand").subscribe((result:any)=>{
      this.myBrands = result;
      console.log(result);
    })
  }

AddProduct(product:any){
  this.http.post("http://localhost:5204/api/Product",product).subscribe((result:any)=>{
  if(result != null){
alert("Product added successfully.");
location.href="/";
  }
  })
  
}

 

}
