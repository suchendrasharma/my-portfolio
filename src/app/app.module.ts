import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { MyworkComponent } from './component/mywork/mywork.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { ProductsComponent } from './component/products/products.component';
import { EnquiryFormComponent } from './component/enquiry-form/enquiry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MyworkComponent,
    ProductsComponent,
    EnquiryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDas5wEKl3wzrMnHS0NO0SezE2i46SIcSk'
    }),
    // AgmSnazzyInfoWindowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
