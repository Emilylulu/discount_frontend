import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import Cloth from './model/cloth';
import endpoints from '../constants/endpoint';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent implements OnInit {
  clothChunks;

  constructor() { }

  async ngOnInit() {
    try {
      const data = await axios.get(endpoints.ALL_PRODUCT);
      this.clothChunks = this.chunks(data.data, 3);
      console.table(this.clothChunks);
    } catch (e) {
      // TODO handle get data fail later
      console.table(`Error connecting with server: ${e}`);
    }

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
