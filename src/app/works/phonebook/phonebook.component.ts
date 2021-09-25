import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';

export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public phoneNumber: string

  ) { }
}

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})


export class PhonebookComponent implements OnInit {

  public field = '';
  public toEdit!: IUser;
  public i!: number;
  public firstName !: string;
  public lastName !: string;
  public isEdit = false;

  public firstArrow: boolean = true;
  public secondArrow: boolean = false;
  public thirdArrow = false;
  public click1 = false
  public click2 = false
  public click3 = false


  public user!: User
  public phoneNumber !: string;
  public firstNameE!: string;
  public lastNameE!: string;
  public phoneNumberE !: string;
  public id!: number;

  public arrPhoneNumbers: Array<IUser> = [
    {
      id: Math.round(Math.random() * 1000),
      firstName: 'Petya',
      lastName: 'Zhuk',
      phoneNumber: '0631111111',
    },
    {
      id: Math.round(Math.random() * 1000),
      firstName: 'Petro',
      lastName: 'Petriv',
      phoneNumber: '0631222222',
    },
    {
      id: Math.round(Math.random() * 1000),
      firstName: 'Alejandro',
      lastName: 'Del Rio Albrechet',
      phoneNumber: '0633333333',
    },
    {
      id: Math.round(Math.random() * 1000),
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      phoneNumber: '0635555555',
    },
    {
      id: Math.round(Math.random() * 1000),
      firstName: 'Ira',
      lastName: 'Tytar',
      phoneNumber: '0636666666',
    },
    {
      id: Math.round(Math.random() * 1000),
      firstName: 'Sofia',
      lastName: 'Zhuk',
      phoneNumber: '0977777777',
    },
  ];

  constructor() { }
  ngOnInit(): void {
  }

  sendEdit(id: number): void {
    let users = this.arrPhoneNumbers.filter(user => user.id === id);
    let index = this.arrPhoneNumbers.indexOf(users[0]);
    this.toEdit = this.arrPhoneNumbers[index];
    this.i = index;
  }

  delete(id: number): void {
    let users = this.arrPhoneNumbers.filter(user => user.id == id);
    let index = this.arrPhoneNumbers.indexOf(users[0]);
    this.arrPhoneNumbers.splice(index, 1);
  }

  sortfName(a: IUser, b: IUser): any {
    if (a.firstName > b.firstName) return 1;
    if (a.firstName < b.firstName) return -1;
    return 0;
  }
  sortf2Name(a: IUser, b: IUser): any {
    if (a.firstName < b.firstName) return 1;
    if (a.firstName > b.firstName) return -1;
    return 0;
  }
  sortFirstName(): void {
    this.firstArrow = !this.firstArrow;
    if (this.firstArrow) {
      this.arrPhoneNumbers.sort(this.sortfName);
    }
    if (!this.firstArrow) {
      this.arrPhoneNumbers.sort(this.sortf2Name);
    }
  }


  sortlName(a: IUser, b: IUser): any {
    if (a.lastName > b.lastName) return 1;
    if (a.lastName < b.lastName) return -1;
    return 0;
  }
  sortl2Name(a: IUser, b: IUser): any {
    if (a.lastName < b.lastName) return 1;
    if (a.lastName > b.lastName) return -1;
    return 0;
  }
  sortLastName(): void {
    this.secondArrow = !this.secondArrow
    if (this.secondArrow) {
      this.arrPhoneNumbers.sort(this.sortlName)
    }
    if (!this.secondArrow) {
      this.arrPhoneNumbers.sort(this.sortl2Name)
    }
  }


  sortPhoneN(a: IUser, b: IUser): any {
    if (a.phoneNumber > b.phoneNumber) return 1;
    if (a.phoneNumber < b.phoneNumber) return -1;
    return 0;
  }
  sortPhoneN2(a: IUser, b: IUser): any {
    if (a.phoneNumber < b.phoneNumber) return 1;
    if (a.phoneNumber > b.phoneNumber) return -1;
    return 0;
  }
  sortPhoneNumber(): void {
    this.thirdArrow = !this.thirdArrow
    if (this.thirdArrow) {
      this.arrPhoneNumbers.sort(this.sortPhoneN)
    }
    if (!this.thirdArrow) {
      this.arrPhoneNumbers.sort(this.sortPhoneN2)
    }
  }

  save(): void {
    this.id = Math.round(Math.random() * 1000);
    let user = new User(this.id, this.firstName, this.lastName, this.phoneNumber)
    user = new User(this.id, this.firstNameE, this.lastNameE, this.phoneNumberE)
    this.arrPhoneNumbers.push(user)
  }

  saveE(): void {
    if (!this.firstNameE) {
      this.firstNameE = this.toEdit.firstName
    }
    if (!this.lastNameE) {
      this.lastNameE = this.toEdit.lastName
    }
    if (!this.phoneNumberE) {
      this.phoneNumberE = this.toEdit.phoneNumber
    }
    let user = new User(this.toEdit.id, this.firstNameE, this.lastNameE, this.phoneNumberE);
    this.arrPhoneNumbers[this.i] = user
  }
  reset(): void {
    this.toEdit.firstName = '',
      this.toEdit.lastName = '',
      this.toEdit.phoneNumber = ''
  }
}
