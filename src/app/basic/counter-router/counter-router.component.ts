import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-counter-router',
  templateUrl: './counter-router.component.html',
  styles: [
  ]
})
export class CounterRouterComponent implements OnInit {

  counter: number = 0;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const initialValue = Number(this.route.snapshot.paramMap.get('initial'));
    this.counter = isNaN(initialValue) ? 10 : initialValue;
  }

  increaseBy(value: number) {
    this.counter += value;
    //TODO:
    console.log('newValue -->', value);
  }

}
