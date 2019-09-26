import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemComponent} from './item/item.component';
import {HomeComponent} from './home/home.component';
import {ClothComponent} from './cloth/cloth.component';
import {ToyComponent} from './toy/toy.component';
import {BookComponent} from './book/book.component';
import {GameComponent} from './game/game.component';
import {JewelryComponent} from './jewelry/jewelry.component';
import {PurseComponent} from './purse/purse.component';
import{ReviewComponent} from './review/review.component';

const routes: Routes = [
  {path: 'item/:id', component: ItemComponent},
  {path: '', component: HomeComponent},
  {path: 'cloth', component: ClothComponent},
  {path: 'book', component: BookComponent},
  {path: 'game', component: GameComponent},
  {path: 'purse', component: PurseComponent},
  {path: 'jewelry', component: JewelryComponent},
  {path: 'toy', component: ToyComponent},
  {path: 'review', component: ReviewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
