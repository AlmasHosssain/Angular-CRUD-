import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LogInComponent } from './componenets/log-in/log-in.component';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './componenets/registration/registration.component';
import { ShareDataModule } from './../share-data/share-data.module';
import { UserAccountComponent } from './user-account.component';

const routes : Routes = [
  {
    path : '',
    component : UserAccountComponent,
    children : [
      {
        path : 'login',
        component : LogInComponent
      },
      {
        path : 'registration',
        component : RegistrationComponent
      }
    ]
  }

]

@NgModule({
  declarations: [UserAccountComponent, RegistrationComponent, LogInComponent],
  imports: [
    CommonModule,
    ShareDataModule,
    RouterModule.forChild(routes),
  ]
})
export class UserAccountModule { }
