import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-day4',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childDataAttribute: string| null;
  @Input() childObjectDataAttribute: any;

  @Output() eventForStringData: EventEmitter<string>;
  @Output() eventForObjectData: EventEmitter<any>;

  constructor() {
    this.childDataAttribute = '';
    this.childObjectDataAttribute = {};
    this.eventForStringData = new EventEmitter();
    this.eventForObjectData = new EventEmitter();
  }

  ngOnInit(): void {
    this.childDataAttribute = this.childDataAttribute || 'default value';
  }
  public sendStringDataToParent() {
    this.eventForStringData.emit('hello from child components')
  }
  public sendDataObjToParent() {
    const user = {
      name: 'david',
      empId: 2301243,
      address: '875 Street 123',
      city: 'bangalore',
      state: 'karnataka',
      designation: "developer"
    }
    this.eventForObjectData.emit(user)
  }

}
