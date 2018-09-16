import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  data$: Subject<{}>;
  asd: string;
  products: any[] = [];

  constructor() {
    this.data$ = new Subject();
    this.asd = 'adadad'

    for(let i = 0; i < 5; i++) {
      setTimeout(() => {
        const rngId = Math.floor(Math.random() * 1001);
        const rngStr = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.products.push({
          id: rngId,
          content: rngStr
        })
        this.data$.next(this.products);
      }, 2000 * i);
    }
  }

  ngOnInit() {
    console.log(`azaza`);




  }

  getData(id) {
    console.log(`getData: `);
    return this.products.filter(o => o.id === id);
  }
  get productsList() {
    console.log(`getData: `);
    return this.products;
  }
}
