import { Injectable } from "@angular/core";
import { Voter } from "../models";
import { Observable, Subject, delay, interval, merge, of, pipe, take, timer } from "rxjs";

const MOCKED_VOTERS = [
    { name: 'John Smith', hasVoted: false },
    { name: 'Will Smith', hasVoted: true },
    { name: 'Fred Flintstone', hasVoted: false }
]

const RANDOM_NAMES = [
    'Bill', 'Mat', 'John', 'Pablo', 'Jessie', 'Monica', 'Betty'
]
const RANDOM_LASTNAMES = [
    'Doe', 'Addams', 'Jetson', 'Stark', 'Sparrow', 'Skywalker'
]

@Injectable({ providedIn: 'root' })
export class DataService {

    currentVoters: Voter[] = MOCKED_VOTERS;
    subject$: Subject<Voter[]>;

    constructor() {
        this.subject$ = new Subject<Voter[]>();
        timer(1000).subscribe(() => {
            this.subject$.next(this.currentVoters);
        })
    }

    getVoters(): Observable<Voter[]> {
        return this.subject$.asObservable();
    }

    addVoter(newVoter: Voter): void {
        this.currentVoters.push(newVoter);
        this.subject$.next(this.currentVoters);
    }

    //just a mockup
    addRandomVoter(): void {
        var name = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
        var lastName = RANDOM_LASTNAMES[Math.floor(Math.random() * RANDOM_LASTNAMES.length)];
        var hasVoted = Math.floor(Math.random()*2) > 0;
        this.addVoter({ name: `${name} ${lastName}`, hasVoted });
    }
}