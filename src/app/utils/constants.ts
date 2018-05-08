import {DialogData} from '../shared/general-dialog/dialog-data';
import {GeneralDialogComponent} from '../shared/general-dialog/general-dialog.component';
import {MatDialog} from '@angular/material';
import * as moment from 'moment';

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

// storage constant variables
export const CURRENT_USER = 'TournamentBracket.CurrentUser';


export function displayDialog(dialog: MatDialog, message: string, title: string = '', buttonType: string = 'warn') {
    dialog.open(GeneralDialogComponent, {
        data: new DialogData(title, message, buttonType)
    });
}

export function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


const displayDateFormat = 'DD MMM YYYY';

export function dateCompare(first, second, isAsc) {
    const a = moment(first, displayDateFormat);
    const b = moment(second, displayDateFormat);
    return (a.isBefore(b) ? -1 : 1) * (isAsc ? 1 : -1);
}
