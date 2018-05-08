import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {BaseComponent} from './base/base.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import {AuthService} from './_services/auth.service';
import {SharedModule} from '../../shared/shared.module';
import {GeneralDialogComponent} from '../../shared/general-dialog/general-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        LoginRoutingModule
    ],
    declarations: [BaseComponent],
    providers: [
        AuthService,
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
    ],
    entryComponents: [GeneralDialogComponent],
    bootstrap: [BaseComponent]
})
export class LoginModule {
}
