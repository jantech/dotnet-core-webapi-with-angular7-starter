import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private apiEndpoint: string) {

  }

  getValues() {
    return this.http.get<string[]>(this.apiEndpoint + 'api/values');
  }

}
