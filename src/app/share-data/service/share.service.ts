import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(
    private dialog : MatDialog
  ) { }

  openConfirmDialog(msg : string){
    return this.dialog.open(ConfirmDialogComponent,{
      width : '380px',
      disableClose : true,
      data : msg
    })
  }
}
