import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableViewComponent } from './components/table-view/table-view.component';

const shareAbleModule = [
   MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule
]

@NgModule({
  declarations: [HeaderComponent, TableViewComponent, ConfirmDialogComponent, FilterPipe],
  imports: [
    CommonModule,
    ...shareAbleModule
  ],
  exports : [
    HeaderComponent,
    TableViewComponent,
    ConfirmDialogComponent,
    ...shareAbleModule
  ]
})
export class ShareDataModule { }
