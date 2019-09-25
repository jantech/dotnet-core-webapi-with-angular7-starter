import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../core/services/values.service';

@Component({
  selector: 'app-values-list',
  templateUrl: './values-list.component.html',
  styleUrls: ['./values-list.component.css']
})
export class ValuesListComponent implements OnInit {

  valuesList: string[] = [];

  constructor(private valueService: ValuesService) { }

  ngOnInit() {

    this.valueService.getValues().subscribe(res => {
      console.log(res);
      this.valuesList = res;
    });

  }

}
