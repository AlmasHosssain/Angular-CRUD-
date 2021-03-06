import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IUser } from '../../models/IUser';
@Component({
  selector: 'app-view-single-user',
  templateUrl: './view-single-user.component.html',
  styleUrls: ['./view-single-user.component.scss']
})
export class ViewSingleUserComponent implements OnInit {

  constructor(
    private dialogRef : MatDialogRef<ViewSingleUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser,
  ) { }

  ngOnInit(): void {
  }
  closePopUp(){
    this.dialogRef.close();
  }

}
