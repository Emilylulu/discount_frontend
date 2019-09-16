import {Component, OnInit} from '@angular/core';
import axios from 'axios';
import endpoints from '../constants/endpoint';

@Component({
  selector: 'app-toy',
  templateUrl: './toy.component.html',
  styleUrls: ['./toy.component.css']
})
export class ToyComponent implements OnInit {

  toyChunks;
  constructor() { }

  async ngOnInit() {
    try {
      const data = await axios.get(endpoints.ALL_TOYS);
      this.toyChunks = this.chunks(data.data, 4);
      console.table(this.toyChunks);
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
