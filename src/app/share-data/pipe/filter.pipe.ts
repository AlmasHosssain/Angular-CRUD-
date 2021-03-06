import { Pipe, PipeTransform } from '@angular/core';

import { IUser } from './../../user-details/models/IUser';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: IUser[], searchTerm : string): any {
    if (!users ||  !searchTerm) {
      return users
    }
    return users.filter(user=>
       user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1
    );
  }

}
