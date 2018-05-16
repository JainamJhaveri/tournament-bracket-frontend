import * as faker from "faker";
import {Pairing, Participant, Round, Tournament} from './Round';


const participants: Participant[] = [];
for (let i = 0; i < 16; i++) {
    participants.push(new Participant('pid-' + i, (i + 1), `${faker.name.firstName()} ${faker.name.lastName()}`));
}

const r1Pairings: Pairing[] = getPairings(participants);
const r2Participants: Participant[] = r1Pairings.map(x => x.p2);
const r2Pairings: Pairing[] = getPairings(r2Participants);
const r3Participants: Participant[] = r2Pairings.map(x => x.p2);
const r3Pairings: Pairing[] = getPairings(r3Participants);
const r4Participants: Participant[] = r3Pairings.map(x => x.p2);
const r4Pairings = getPairings(r4Participants);
const r5Participants: Participant[] = r4Pairings.map(x => x.p2);
const r5Pairings = getPairings(r5Participants);


const round1 = new Round('roundId-1', "Round 1", r1Pairings);
const round2 = new Round('roundId-2', "Round 2", r2Pairings);
const round3 = new Round('roundId-3', "Semi-Finals", r3Pairings);
const round4 = new Round('roundId-4', "Finals !", r4Pairings);
const round5 = new Round('roundId-5', "Champion !!!", r5Pairings);
const sampleRounds = [round1, round2, round3, round4, round5];

export const sampleTournament = new Tournament('tournamentId-1', 'Tournament 1',
    '01/01/2001', '11/01/2001', sampleRounds);


function getPairings(participants: Participant[]) {
    const pairings: Pairing[] = [];
    for (let i = 0; i < participants.length / 2; i++) {
        const p1 = participants[i * 2];
        const p2 = participants[i * 2 + 1];
        pairings.push(new Pairing('pairId-' + randomIntFrom(1, 1000), p1, p2));
    }
    console.log(pairings);
    return pairings;
}


function randomIntFrom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

