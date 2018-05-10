import {Component, OnInit} from '@angular/core';
import {sampleTournament} from "../../models/dashboard/sample-1-round";
import {Participant} from "../../models/dashboard/Round";

const i = 0;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    tournament = sampleTournament;
    private participantToHighlight: Participant;

    constructor() {
        this.participantToHighlight = new Participant('pid-' + i, (i + 1), 'A' + i, 'B' + i);
    }

    ngOnInit() {
        console.log(this.tournament);
    }

}
