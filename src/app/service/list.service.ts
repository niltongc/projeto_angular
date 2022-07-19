import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' })
  }
  
  apiURL = "https://api.itbook.store/1.0/search/";

  constructor(private httpClient: HttpClient) {

  }
  
  getList(text: any): Observable<any> {

    return this.httpClient.get(this.apiURL+text);

  } 

}
