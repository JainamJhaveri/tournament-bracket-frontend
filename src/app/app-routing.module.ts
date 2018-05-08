import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './utils/not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard';

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
