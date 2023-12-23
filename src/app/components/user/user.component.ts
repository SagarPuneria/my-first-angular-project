import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //variable declaration area usaually arranged in alphabetical order
  // basic primitive types
  public title: string;
  public subTitle: string;
  public count: number;
  public isValid: boolean;
  public message: null;
  public name: string;
  public selectedFruit: string;
  public result: number;

  // non primitive data type
  public date: Date;

  constructor() {
    this.title = '';
    this.subTitle = '';
    this.name = '';
    this.count = 0;
    this.isValid = false;
    this.date = new Date();
    this.message = null;
    this.result = 0;
    this.selectedFruit = '';
  }

  ngOnInit(): void {
    this.title = 'User component';
    this.subTitle = 'Data binding';
    this.count = 1;
    this.isValid = true;
    this.result = this.generateRandomNumber();
  }

  public generateRandomNumber(): number {
    return Math.random();
  }
  public incrementCount() {
    this.count = this.count + 1;
  }

  public decrementCount() {
    this.count = this.count - 1;
  }

  public sendMessage(value: string): void {
    console.log(value)
  }

  /* public onFruitSelection(event: any): void {
    this.selectedFruit = event.target.value
    console.log(event)
  } */
  public onFruitSelection(event: Event): void {
    /* const target:string = (event.target as HTMLInputElement).value;
    this.selectedFruit = target; */
    const target = event.target as HTMLSelectElement;
    this.selectedFruit = target.value;
    console.log(event)
  }
}
