import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { IUser } from './../../../user-details/models/IUser';
import { Router } from '@angular/router';
import { ShareService } from './../../service/share.service';
import { UserDetailsService } from './../../../user-details/service/user-details-service.service';
import { ViewSingleUserComponent } from 'src/app/user-details/components/view-single-user/view-single-user.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Input() columnHeading!: Array<string>;
  @Input() users!: any[];
  @Input() url!: string;
  nameSearch : string = "";

  constructor(
    private matDialog: MatDialog,
    private router: Router,
    private userDetailsService: UserDetailsService,
    private shareService: ShareService
  ) { }

  ngOnInit(): void {
  }


  viewDetails(user: IUser) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "60%";
    this.matDialog.open(ViewSingleUserComponent, {
      data: user
    })
  }

  updateTask(user: IUser) {
    this.router.navigate(['/' + this.url, user.id])
  }

  deleteUser(user: IUser) {
    this.shareService.openConfirmDialog('Are you sure to delete this record?')
      .afterClosed().subscribe(res => {
        if (res) {
          if (this.url == "user") {
            this.userDetailsService.removerUser(user).subscribe(data => {
              this.users = data;
            })
          }
        }
      })
  }


}
