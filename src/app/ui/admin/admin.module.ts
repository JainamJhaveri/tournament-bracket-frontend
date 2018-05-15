import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminNavComponent} from './admin-nav/admin-nav.component';
import {SharedModule} from "../../shared/shared.module";
import {MatIconModule} from "@angular/material";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatIconModule,
        AdminRoutingModule,
    ],
    declarations: [AdminNavComponent, DashboardComponent]
})
export class AdminModule {
}
