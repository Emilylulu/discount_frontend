import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import Cloth from './model/item';
import endpoints from '../constants/endpoint';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
import { detachEmbeddedView } from '@angular/core/src/view';



declare var $:any;
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  ngAfterViewInit() {
    $('.tabular.menu .item').tab();
    $('.ui.rating')
  .rating({
    initialRating: 3,
    maxRating: 5
  })
;


    }
    list;
    constructor() { }
    
    
    async ngOnInit() {
      try {
        this.list = await axios.get(endpoints.ONE_ITEM).then(function(response){
          
            var detail;
            detail = response.data;
            console.log(response.data.title);
            
            return detail;

        }
        
          

        );
      } catch (e) {
        // TODO handle get data fail later
        console.table(`Error connecting with server: ${e}`);
      }
      console.log(this.list.title);
      
    }

    
      /*const user = axios.get(endpoints.ONE_ITEM)
      .then(function (response) {
        //console.log(response);
        //this.productdata = response.data.title;
        //console.log(response.data);
        this.list = response.data;
        console.log(this.list);

        return this.list;
        

      })
      .catch(function (error) {
        console.log(error);
      });
      */

      

      
      
      

  
   
  
  
}
