export enum PairingStatus {
    NOT_STARTED = 1,
    P1_GETS_BYE = 2, P2_GETS_BYE = 3,
    P1_WINS = 4, P2_WINS = 5,
    DRAW = 6
}

export class Participant {
    constructor(public participantId: string,
                public participantNo: number,
                public firstName: string,
                public lastName: string) {
    }
}

export class Pairing {
    constructor(public pairingId: string,
                public participant1: Participant,
                public participant2: Participant,
                public pairingStatus: PairingStatus = PairingStatus.NOT_STARTED) {

    }
}

export class Round {
    constructor(public roundId: string,
                public roundNo: number,
                public pairings: Pairing[]) {
    }
}

export class Tournament {
    constructor(public tournamentId: string,
                public name: string,
                public startDate: string,
                public endDate: string,
                public rounds: Round[]) {
    }
}
