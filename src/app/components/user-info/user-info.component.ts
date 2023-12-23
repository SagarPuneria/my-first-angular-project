import { Component, OnInit } from '@angular/core';
import { IUserInfo } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info2.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public user: IUserInfo;
  public isUserTableVisible: boolean;
  public isUserTableRowVisible: boolean;
  constructor() {
    this.user = {} as IUserInfo;
    this.isUserTableVisible = true;
    this.isUserTableRowVisible = true;

  }

  ngOnInit(): void {
    this.user = {
      name: 'Sagar',
      age: 42,
      address: {
        city: 'blr',
        code: 10
      }
    };
  }

  public toggleTable() {
    this.isUserTableVisible = !this.isUserTableVisible;
  }
  public editUser() {
    this.isUserTableRowVisible = false;
  }
  public updateUser() {
    this.isUserTableRowVisible = true;
  }
}
