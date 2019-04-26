import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { ClothComponent } from './cloth/cloth.component';
>>>>>>> c03ff4806c9afb7ae15a118ac24c9ec84e1f6075


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HomeComponent,
    NavComponent,
<<<<<<< HEAD
    FooterComponent
=======
    ClothComponent
>>>>>>> c03ff4806c9afb7ae15a118ac24c9ec84e1f6075
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
