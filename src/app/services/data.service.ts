import { Injectable } from "@angular/core";
import { Candidate, Voter } from "../models";
import { Observable, Subject, delay, interval, merge, of, pipe, take, timer } from "rxjs";

const MOCKED_VOTERS = [
    { name: 'John Smith', hasVoted: false },
    { name: 'Will Smith', hasVoted: true },
    { name: 'Fred Flintstone', hasVoted: false }
]

const MOCKED_CANDIDATES = [
    { name: 'George Washington', votes: 0 },
    { name: 'Thomas Jefferson', votes: 0 }
]

const RANDOM_NAMES = [
    'Bill', 'Mat', 'John', 'Pablo', 'Jessie', 'Monica', 'Betty', 'Donald'
]
const RANDOM_LASTNAMES = [
    'Doe', 'Addams', 'Jetson', 'Stark', 'Sparrow', 'Skywalker'
]

@Injectable({ providedIn: 'root' })
export class DataService {
    currentVoters: Voter[] = MOCKED_VOTERS;
    currentCandidates: Candidate[] = MOCKED_CANDIDATES;
    voters$: Subject<Voter[]>;
    candidates$: Subject<Candidate[]>

    constructor() {
        this.voters$ = new Subject<Voter[]>();
        this.candidates$ = new Subject<Candidate[]>();

        timer(1000).subscribe(() => {
            this.voters$.next(this.currentVoters);
            this.candidates$.next(this.currentCandidates);
        })
    }

    getVoters(): Observable<Voter[]> {
        return this.voters$.asObservable();
    }

    getCandidates(): Observable<Candidate[]> {
        return this.candidates$.asObservable();
    }

    addVoter(newVoter: Voter): void {
        this.currentVoters.push(newVoter);
        this.voters$.next(this.currentVoters);
    }

    addCandidate(newCandidate: Candidate): void {
        this.currentCandidates.push(newCandidate);
        this.candidates$.next(this.currentCandidates);
    }

    private _getRandomName(): string {
        var name = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
        var lastName = RANDOM_LASTNAMES[Math.floor(Math.random() * RANDOM_LASTNAMES.length)];
        return `${name} ${lastName}`;
    }

    addRandomVoter(): void {
        var name = this._getRandomName();
        var hasVoted = Math.floor(Math.random()*2) > 0;
        this.addVoter({ name, hasVoted });
    }

    addRandomCandidate(): void {
        var name = this._getRandomName();
        var votes = 0;
        this.addCandidate({ name, votes });
    }
}