import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import endpoints from '../constants/endpoint';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookChunks;

  constructor() { }

  async ngOnInit() {
    try {
      const data = await axios.get(endpoints.ALL_BOOKS);
      this.bookChunks = this.chunks(data.data, 4);
      console.table(this.bookChunks);
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
