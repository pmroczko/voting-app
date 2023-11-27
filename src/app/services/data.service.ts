import { Injectable } from "@angular/core";
import { Voter } from "../models";
import { Observable, Subject, delay, interval, merge, of, pipe, take, timer } from "rxjs";

const MOCKED_VOTERS = [ 
    {name: 'John Smith', hasVoted: false}, 
    {name: 'Will Smith', hasVoted: true}, 
    {name: 'Fred Flintstone', hasVoted: false}
  ]

@Injectable({providedIn: 'root'})
export class DataService {

    currentVoters: Voter[] = MOCKED_VOTERS;
    subject$: Subject<Voter[]>;

    constructor()
    {
        this.subject$ = new Subject<Voter[]>();
        timer(1000).subscribe(() => {            
            this.subject$.next(this.currentVoters);
        })
    }

    getVoters(): Observable<Voter[]> {
        return this.subject$.asObservable();
    }

    addVoter(newVoter: Voter): void{
        this.currentVoters.push(newVoter);
        this.subject$.next(this.currentVoters);
    }


}