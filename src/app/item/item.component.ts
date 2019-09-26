import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

import axios from 'axios';
import ItemDetail from './model/item';
import endpoints from '../constants/endpoint';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
import { detachEmbeddedView } from '@angular/core/src/view';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

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
    reviewList;
    //constructor() { }
    
    private routeSub: Subscription;
    constructor(private route: ActivatedRoute) { }
    async ngOnInit() {
      var id;

      this.routeSub = this.route.params.subscribe(params => {

        console.log(params) //log the entire params object
        console.log(params['id']) //log the value of id
        id = params['id'];

        
      });
      try {

        this.list = await axios.get(endpoints.ONE_ITEM + id).then(function(response){
          
            var detail;
            detail = response.data;
            console.log(response.data.title);
            
            return detail;

        });
        
      } catch (e) {
        // TODO handle get data fail later
        console.table(`Error connecting with server: ${e}`);
      }

      try {

      
    
        const review = await axios.get(endpoints.REVIEW + id);
        this.reviewList = this.chunks(review.data, 20);
          // var review;
          // review = response.data;
          // console.log(response.data.reviewText);
          
          // return review;
  
      //}
        
          
  
        //);
  
      } catch (e) {
        // TODO handle get data fail later
        console.table(`Error connecting with server: ${e}`);
      }
      console.log(this.list.title);
    }
      //console.log(this.list.title);
      
    
  
    // ngOnDestroy() {
    //   this.routeSub.unsubscribe();
    // }
    chunks = (array, size) => {
      if (array === undefined) {
        return array;
      }
      const results = [];
      while (array.length) {
        results.push(array.splice(0, size));
      }
      return results;
    }
      // try{
      //   this.review = await axios.get(endpoints.REVIEW + id).then(function(response){
          
      //     var review;
      //     review = response.data;
      //     console.log(response.data.reviewText);
          
      //     return review;

      // }
        
          

      //   );

      // } catch (e) {
      //   // TODO handle get data fail later
      //   console.table(`Error connecting with server: ${e}`);
      // }
      
      
    

    ngOnDestroy() {
      this.routeSub.unsubscribe();
    }
  }
