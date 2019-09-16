import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ClothComponent } from './cloth/cloth.component';
import { ToyComponent } from './toy/toy.component';
import { BookComponent } from './book/book.component';
import { GameComponent } from './game/game.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { PurseComponent } from './purse/purse.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ClothComponent,
    ToyComponent,
    BookComponent,
    GameComponent,
    JewelryComponent,
    PurseComponent
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
