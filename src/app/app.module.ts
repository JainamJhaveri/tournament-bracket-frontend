import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthGuard} from "./guards/auth.guard";
import {AuthService} from "./ui/login/_services/auth.service";
import {httpInterceptorProviders} from "./http-interceptors";
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotFoundComponent} from "./utils/not-found/not-found.component";
import {HttpErrorHandler} from "./http-error-handler";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from './ui/viewers/dashboard/dashboard.component';
import {MyMatchHeightDirective} from './utils/my-match-height.directive';


@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        DashboardComponent,
        MyMatchHeightDirective,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        AppRoutingModule,
    ],
    providers: [
        AuthService,
        AuthGuard,
        HttpErrorHandler,
        httpInterceptorProviders,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
