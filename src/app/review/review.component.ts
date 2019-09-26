import { Component, OnInit } from '@angular/core';

import axios from 'axios';
//import ItemDetail from '/model/item';
import endpoints from '../constants/endpoint';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
import { detachEmbeddedView } from '@angular/core/src/view';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  //constructor() { }

  //ngOnInit() {

  
  //review;
  reviewList;
  //constructor() { }
  
  // private routeSub: Subscription;
  // constructor(private route: ActivatedRoute) { }
  async ngOnInit() {
    var id;

    // this.routeSub = this.route.params.subscribe(params => {

    //   console.log(params) //log the entire params object
    //   console.log(params['id']) //log the value of id
    //   id = params['id'];

      
    // });
    try {

      
    
      const review = await axios.get(endpoints.REVIEW);
      this.reviewList = this.chunks(review.data, 4);
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
    //console.log(this.list.title);
    
  }

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
}



  


    


