import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemComponent} from './item/item.component';
import {HomeComponent} from './home/home.component';
import {ClothComponent} from './cloth/cloth.component';

const routes: Routes = [
  {path: 'item', component: ItemComponent},
  {path: '', component: HomeComponent},
  {path: 'cloth', component: ClothComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
