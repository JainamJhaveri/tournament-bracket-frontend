import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../../utils/validation';
import {User} from '../../../models/User';
import {displayDialog, PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH} from '../../../utils/constants';
import {
    MSG_EMAIL_REQUIRED,
    MSG_EMAIL_VALID,
    MSG_PASSWORD_MAX_LENGTH,
    MSG_PASSWORD_REQUIRED
} from '../../../utils/messages';
import {AuthService} from '../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'login-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

    loginForm: FormGroup;
    emailFormControl: FormControl;
    passwordFormControl: FormControl;
    matcher: MyErrorStateMatcher = new MyErrorStateMatcher();
    user: User = new User();
    msgPasswordLength: String = MSG_PASSWORD_MAX_LENGTH;
    msgPasswordRequired: String = MSG_PASSWORD_REQUIRED;
    msgEmailValid: String = MSG_EMAIL_VALID;
    msgEmailRequired: String = MSG_EMAIL_REQUIRED;
    passwordMinLength: number = PASSWORD_MIN_LENGTH;
    passwordMaxLength: number = PASSWORD_MAX_LENGTH;
    loading: boolean = false;

    returnUrl: String;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private fb: FormBuilder,
                private authService: AuthService,
                private dialog: MatDialog) {
        this.buildForm();
    }

    ngOnInit() {
        this.authService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {

        if (this.isFormInvalid()) return;

        this.loading = true;

        // call login api and onSuccess redirect to home page
        this.authService.login(this.user.email)
            .subscribe(response => {
                console.log(response.message);
                this.loading = false;

                if (!response.status) {
                    displayDialog(this.dialog, response.message);
                } else {
                    this.router.navigate([this.returnUrl]);
                }

            });
    }

    private buildForm() {
        this.emailFormControl = new FormControl(this.user.email, [
            Validators.required,
            Validators.email,
        ]);
        this.passwordFormControl = new FormControl(this.user.password, [
            Validators.required,
            Validators.minLength(this.passwordMinLength),
            Validators.maxLength(this.passwordMaxLength)
        ]);

        this.loginForm = this.fb.group(this.emailFormControl, this.passwordFormControl);
    }

    private isFormInvalid() {
        return this.passwordFormControl.errors != null ||
            this.emailFormControl.errors != null;
    }
}
