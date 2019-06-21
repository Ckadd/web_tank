import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Menu } from '../Models/menu';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
 })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  private hostUrl = `http://api-server/tankstore/public`;  // don't use local in case of cross domain or ip address
  private apiUrl = `${this.hostUrl}/api`;
    
  constructor(private http:HttpClient) { }

  getMenu(){
    console.log(this.apiUrl + '/getmenu')
    return this.http.get<Menu[]>(this.apiUrl + '/getmenu');
  }

  
}
