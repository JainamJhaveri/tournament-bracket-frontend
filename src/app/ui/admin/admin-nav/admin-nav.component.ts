import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
    selector: 'admin-nav',
    templateUrl: './admin-nav.component.html',
    styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
    isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

    constructor(private breakpointObserver: BreakpointObserver) {
    }
}
