import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { IUser } from './../../../user-details/models/IUser';
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
  nameSearch : string = "";
  @Output() public updateUser = new EventEmitter<IUser>();
  @Output() public deleteUser = new EventEmitter<IUser>();

  constructor(
    private matDialog: MatDialog,
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

  updateUserFn(user: IUser) {
    this.updateUser.emit(user);
  }

  deleteUserFn(user: IUser) {
    this.shareService.openConfirmDialog('Are you sure to delete this record?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.deleteUser.emit(user)
        }
      })
  }


}
