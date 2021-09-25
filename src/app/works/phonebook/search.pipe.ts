import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './user.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: Array<IUser>, field: string): Array<IUser> {
    if (!field) {
      return users;
    }
    if (!users) {
      return [];
    }
    return users.filter(user =>
      user.firstName.toLowerCase().includes(field.toLowerCase()) || user.lastName.toLowerCase().includes(field.toLowerCase()) || user.phoneNumber.toLowerCase().includes(field.toLowerCase())
    )
  }

}
