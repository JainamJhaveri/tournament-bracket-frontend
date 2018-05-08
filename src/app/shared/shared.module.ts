import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {GeneralDialogComponent} from './general-dialog/general-dialog.component';
import {MyMaterialModule} from "./my-material.module";


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MyMaterialModule
  ],
  exports: [
    MyMaterialModule,
    FlexLayoutModule
  ],
  declarations: [GeneralDialogComponent]

})
export class SharedModule {
}
