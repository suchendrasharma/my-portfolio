import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { EnquiryFormComponent } from './component/enquiry-form/enquiry-form.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProductsComponent
  },
  {
    path: 'contact_me',
    component: ContactComponent
  },
  {
    path: 'enquiry',
    component: EnquiryFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
