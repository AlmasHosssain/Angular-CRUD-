import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareDataModule } from '../share-data/share-data.module';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersComponent } from './user-details.component';
import { ViewSingleUserComponent } from './components/view-single-user/view-single-user.component';

const routes: Routes = [
  {
    path : '',
    component : UsersComponent,
    children : [
      {
        path : '',
        component : UserCreateComponent
      },
      {
        path : 'user/list',
        component : UserListComponent
      },
      {
        path : 'user/:id',
        component : UserCreateComponent
      }
    ]
  }
];

@NgModule({
  declarations: [UserCreateComponent, UserListComponent, UsersComponent, ViewSingleUserComponent],
  imports: [
    CommonModule,
    ShareDataModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
