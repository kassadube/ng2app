import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import {environment} from "../environments/environment"
import {Item} from "./common/item";


@Injectable()
export class DataService {

  list : Item[];

  constructor(private http: Http) { }

  getData() {
    return this.list;
  }

  getDataObservable():Observable<any>{
    return this.http.get(environment.dataUrl)
    .map(response=> response.json())
    .map(items => items.map(item =>{ return new Item(item.id, item.name)}));

  }
}
