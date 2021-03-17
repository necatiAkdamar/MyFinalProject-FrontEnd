import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent},//linke hiçbirşey yazmazsa adres olarak default product componenti getir. (html router outlet yazan yere)
  {path:"products", component:ProductComponent},//products yazarsa ana sayfada  product componentini göster
  {path:"products/category/:categoryId", component:ProductComponent}//:categoryId parametresi geleceği için : kullandık. categoryId değişkeninde tutulacak orası
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
