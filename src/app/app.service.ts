import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppData } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient:HttpClient) { }

  get():Observable<AppData[]>{
    return this.httpClient.get<AppData[]>('google.com');
  }

  add(){

  }

  update(){

  }

  delete(){
    
  }
}
