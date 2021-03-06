import { Observable, of } from 'rxjs';

import { IUser } from '../models/IUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  addNewUser(user: IUser) {
    console.log(user)
    let userArray = [];
    if(localStorage.getItem('User')){
      userArray =JSON.parse(localStorage.getItem('User')!)
      userArray = [user,...userArray]
    }else{
      userArray = [user]
    }

    localStorage.setItem('User',JSON.stringify(userArray))
     this.viewAllUser()
  }

  viewAllUser() : Observable<IUser[]>{
    return of(JSON.parse(localStorage.getItem('User')!))
  }

  getSingleUser(id: string): Observable<IUser> {
    let userArray = []
    userArray = JSON.parse(localStorage.getItem('User')!)
    return of(userArray.find((singleUser:IUser) => {
      return singleUser.id == id;
    }))
  }


  updateSingleTask(user : IUser) :Observable<IUser[]>{
    const userArray = JSON.parse(localStorage.getItem('User')!)
    userArray.forEach((singleUser : IUser)=>{
       if (singleUser.id == user.id) {
         console.log(singleUser)
        singleUser.name = user.name;
        singleUser.email = user.email,
        singleUser.password = user.password;
        singleUser.skills = user.skills
        console.log(singleUser)
       }else{
        singleUser
       }
   })
   localStorage.setItem('User', JSON.stringify(userArray))

   return of(JSON.parse(localStorage.getItem('User')!))
  }

  removerUser(user : IUser) : Observable<IUser[]>{
    const userArray = JSON.parse(localStorage.getItem('User')!);
    let newTaskArray= userArray.filter((singleUser : IUser)=>{
      return singleUser.id != user.id
    })
    localStorage.setItem('User', JSON.stringify(newTaskArray))
    return of(JSON.parse(localStorage.getItem('User')!));
  }

}
