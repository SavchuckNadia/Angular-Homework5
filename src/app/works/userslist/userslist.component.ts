import { Component, OnInit } from '@angular/core';

export class User {
  constructor(
    public login: string,
    public password: string,
    public email: string

  ) { }
}

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  public users: Array<User> = [];
  public user: User = new User("", "", "")
  public isEdit = false;
  public editIndex!: number;
  public newLogin!: string;
  public newPassword: any;
  public newEmail: any;
  constructor() { }

  ngOnInit(): void {
  }
  addUser() {
    this.user = new User(this.newLogin, this.newPassword, this.newEmail)
    this.users.push(this.user)
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1)
  }
  editUser(index: number): void {
    let edituser = this.users[index];
    this.newEmail = edituser.email;
    this.newLogin = edituser.login;
    this.newPassword = edituser.password;
    this.editIndex = index;
    this.isEdit = true;
  }
  saveUser(): void {
    this.users[this.editIndex] = new User(this.newLogin, this.newPassword, this.newEmail);
    this.isEdit = false;
  }

}
