import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import endpoints from '../constants/endpoint';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {
  clothChunks;

  constructor(private router: Router) { }

  async ngOnInit() {
    try {
      const data = await axios.get(endpoints.ALL_CLOTHES);
      this.clothChunks = this.chunks(data.data, 4);
      console.table(this.clothChunks);
    } catch (e) {
      // TODO handle get data fail later
      console.table(`Error connecting with server: ${e}`);
    }

  }
  onSelect(cloth) {
    this.router.navigate(['/item', cloth.id]);
  }

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
