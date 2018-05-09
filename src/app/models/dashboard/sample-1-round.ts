import {Pairing, Participant, Round, Tournament} from './Round';

const sampleParticipants: Participant[] = [];
for (let i = 0; i < 16; i++) {
    sampleParticipants.push(new Participant('pid-' + i, (i + 1), 'A' + i, 'B' + i));
}

const r1Pairings: Pairing[] = [];
for (let i = 0; i < 8; i++) {
    r1Pairings.push(
        new Pairing('pairId-' + i,
            sampleParticipants[i * 2], sampleParticipants[i * 2 + 1]));
}
const r2Pairings = r1Pairings.filter((x, index) => index % 2 == 0);
const r3Pairings = r2Pairings.filter((x, index) => index % 2 == 0);
const r4Pairings = r3Pairings.filter((x, index) => index % 2 == 0);


const round1 = new Round('roundId-1', 1, r1Pairings);
const round2 = new Round('roundId-2', 2, r2Pairings);
const round3 = new Round('roundId-3', 3, r3Pairings);
const round4 = new Round('roundId-4', 4, r4Pairings);
const sampleRounds = [round1, round2, round3, round4];

export const sampleTournament = new Tournament('tournamentId-1', 'Tournament 1',
    '01/01/2001', '01/01/2001', sampleRounds);
