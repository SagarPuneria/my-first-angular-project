import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public userRecords:IUserInfo[];

  constructor() { 
    this.userRecords=[]
  }

  ngOnInit(): void {
    this.userRecords = [
      {
        name: 'Sagar',
        age: 42,
        address: {
          city: 'blr',
          code: 10
        }
      },
      {
        name: 'David',
        age: 41,
        address: {
          city: 'hyd',
          code: 123
        }
      }
    ]
  }

}
