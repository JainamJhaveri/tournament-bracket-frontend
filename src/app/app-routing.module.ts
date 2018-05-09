import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './utils/not-found/not-found.component';
import {DashboardComponent} from "./ui/dashboard/dashboard.component";

const routes: Routes = [
    // {
    //     path: '',
    //     loadChildren: './ui/dashboard/dashboard.module#DashboardModule',
    //     canActivate: [AuthGuard]
    // },
    {
        path: 'login',
        loadChildren: './ui/login/login.module#LoginModule'
    },
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
