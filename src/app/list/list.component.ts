import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list = [];

  dataService= null;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    this.dataService.getDataObservable()
    .subscribe(
      list=>this.list = list,
      error => console.error("Error", error),
      () => console.log('Done')
      );
    
  }

}