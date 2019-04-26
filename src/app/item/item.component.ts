import { Component, OnInit } from '@angular/core';
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

    constructor() { }

    ngOnInit() {
    }
  
  }
