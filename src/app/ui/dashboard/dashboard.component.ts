import {Component, OnInit} from '@angular/core';
import {sampleTournament} from "../../models/dashboard/sample-1-round";
import {Participant} from "../../models/dashboard/Round";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    tournament = sampleTournament;
    participantToHighlight: Participant;

    constructor() {

    }

    ngOnInit() {
        console.log(this.tournament);
    }

    highlight(participant: Participant) {
        this.participantToHighlight = participant;
    }
}
