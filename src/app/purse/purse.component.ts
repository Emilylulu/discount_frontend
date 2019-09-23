import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import endpoints from '../constants/endpoint';
import {Router} from '@angular/router';

@Component({
  selector: 'app-purse',
  templateUrl: './purse.component.html',
  styleUrls: ['./purse.component.css']
})
export class PurseComponent implements OnInit {
  purseChunks;
  constructor(private router: Router) { }

  async ngOnInit() {
    try {
      const data = await axios.get(endpoints.ALL_PURSE);
      this.purseChunks = this.chunks(data.data, 4);
      console.table(this.purseChunks);
    } catch (e) {
      // TODO handle get data fail later
      console.table(`Error connecting with server: ${e}`);
    }
  }
  onSelect(purse) {
    this.router.navigate(['/item', purse.id]);
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
