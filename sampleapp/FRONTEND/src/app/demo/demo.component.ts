import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnDestroy {

  constructor() { }
  unsubscribe: Subscription;

  xc: Observable<any>;

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

  ngOnInit() {
    this.createData();
    this.getData();
  }
  createData() {
    this.xc = Observable.create((observer) => {
      setInterval(() => {
        observer.next(Math.random());
      }, 1000);
    });
  }

  getData() {

    this.unsubscribe = this.xc.subscribe(x =>
      console.log(x)
    );

  }

}
