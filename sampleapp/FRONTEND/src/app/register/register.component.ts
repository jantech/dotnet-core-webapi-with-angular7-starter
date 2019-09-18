import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  result: any;

  constructor(private http: HttpClient) { 

    this.http.get('https://localhost:5001/api/values').subscribe((res) => {

      this.result = res;
      console.log(res);

    },(err) => {
      
      console.log(err);

    });

  }

  ngOnInit() {
  }

}
