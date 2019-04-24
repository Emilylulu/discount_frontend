import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// const modal = document.getElementById('myModal');
//
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// const img = document.getElementById('myImg');
// const modalImg = document.getElementById('img01');
// const captionText = document.getElementById('caption');
// const span = document.getElementsByClassName('close')[0];
export class AppComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  // myImages = ['dress.jpg', 'shoe.jpg', ];
}
