import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from './dialog-data';

@Component({
    selector: 'app-general-dialog',
    templateUrl: './general-dialog.component.html',
    styleUrls: ['./general-dialog.component.css']
})
export class GeneralDialogComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

}
