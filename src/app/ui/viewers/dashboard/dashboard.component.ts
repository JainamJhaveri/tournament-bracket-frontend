import {Component, OnInit} from '@angular/core';
import {sampleTournament} from "../../../models/dashboard/sample-1-round";
import {Participant, Round} from "../../../models/dashboard/Round";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    tournament = sampleTournament;
    participantToHighlight: Participant;
    roundToHighlight: Round;

    constructor() {

    }

    ngOnInit() {
        console.log(this.tournament);
    }

    highlightParticipant(participant: Participant, event: any) {
        event.stopPropagation();
        if (this.participantToHighlight != null &&
            this.participantToHighlight.participantId == participant.participantId) {
            this.participantToHighlight = null
        }
        else {
            this.participantToHighlight = participant;
        }
    }


    highlightRound(round: Round, event: any) {
        event.stopPropagation();
        if (this.roundToHighlight != null &&
            this.roundToHighlight.roundId == round.roundId) {
            this.roundToHighlight = null
        }
        else {
            this.roundToHighlight = round;
        }
    }
}
