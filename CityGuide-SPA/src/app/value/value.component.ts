import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Value } from '../models/value';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  values:Value[]=[];
  ngOnInit() {
    this.getValues().subscribe(data=>
      {
        this.values=data
      }
      )
  }
  getValues()
  {
    return this.httpClient.get<Value[]>("http://localhost:62381/api/values")
  }
}
