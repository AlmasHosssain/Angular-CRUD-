import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [

  {
    path : 'user',
    loadChildren : ()=>import('./user-account/user-account.module').then(m=>m.UserAccountModule)
  },
  {
    path : '',
    loadChildren : ()=>import('./user-details/user-details.module').then(m=>m.UsersModule)
  },

  {
    path : "**",
    redirectTo : '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
