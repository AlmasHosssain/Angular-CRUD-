import {Component, OnInit} from '@angular/core';

import { IUser } from './../../models/IUser';
import { Router } from '@angular/router';
import { UserDetailsService } from './../../service/user-details-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  userArray! : IUser[];
  displayedColumns: Array<string>= ['Name', 'Email', 'Action']
  editUrl: string = "user"

  constructor(
    private userDetailsService : UserDetailsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userDetailsService.viewAllUser().subscribe((data)=>{
      this.userArray = data
    })
  }

  getUpdateUser(user : IUser){
    this.router.navigate(['/user',user.id])
  }

  getDeleteUser(user : IUser){
    this.userDetailsService.removerUser(user).subscribe(data => {
      this.userArray = data;
    })
  }
}
