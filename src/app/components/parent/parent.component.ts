import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-day4',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public messageFromParent: string;
  public objectFromParent: any;
  public stringDataFromChild: string;
  public dataObjFromChild: any;

  constructor() {
    this.messageFromParent = '';
    this.objectFromParent = {};
    this.stringDataFromChild = '';
    this.dataObjFromChild = {};
  }

  ngOnInit(): void {
  }
  public sendDatatoChild(): void {
    this.messageFromParent = "Hello from parent component";
    this.objectFromParent = {
      name: 'John Doe',
      age: 25,
      city: 'Example City'
    };
  }

  public parentMethodForString(message: string) {
    this.stringDataFromChild = message;
  }
  public parentMethodForObject(message: string) {
    this.dataObjFromChild = message;
  }
}
