import {Component, OnInit} from '@angular/core';
import {sampleTournament} from "../../models/dashboard/sample-1-round";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    tournament = sampleTournament;

    constructor() {
    }

    ngOnInit() {
        console.log(this.tournament);
    }

}
