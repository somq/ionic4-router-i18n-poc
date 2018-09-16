import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy  {
  products: any;
  sub: any;
  id: number;

  constructor(public dataS: DataService, private route: ActivatedRoute, public router: Router) {
    this.products = this.dataS.productsList;
    this.dataS.data$.subscribe(res => {
      this.products = res
      console.log(`res: `, res);
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log(`this.id: `, this.id);
       this.dataS.getData(this.id)
       console.log(`this.dataS.getData(this.id): `, this.dataS.getData(this.id));
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.dataS.data$.unsubscribe();
  }
}
