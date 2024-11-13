import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

export const routes: Routes = [
    {
        path:"",
        component:ProductsComponent
     },
     {
        path:"addproduct",
        component:AddproductComponent
     },
     {
        path:"editproduct/:id",
        component:EditproductComponent
     }
];
