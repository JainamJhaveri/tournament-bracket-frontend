import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './utils/not-found/not-found.component';
import {DashboardComponent} from "./ui/viewers/dashboard/dashboard.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: './ui/admin/admin.module#AdminModule',
        canActivate: [AuthGuard]
    },
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
