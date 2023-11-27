//TODO: this can be split into multiple files later
export interface Voter {
    name: string;
    hasVoted: boolean;
}

export interface Candidate {
    name: string;
    votes: number;
}