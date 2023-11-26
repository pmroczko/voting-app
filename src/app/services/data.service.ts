import { Injectable } from "@angular/core";
import { Voter } from "../models";
import { Observable, merge, of } from "rxjs";

const MOCKED_VOTERS = [ 
    {name: 'John Smith', hasVoted: false}, 
    {name: 'Will Smith', hasVoted: true}, 
    {name: 'Fred Flintstone', hasVoted: false}
  ]

@Injectable({providedIn: 'root'})
export class DataService {

    currentVoters$: Observable<Voter[]>;
    
    constructor()
    {
        this.currentVoters$ = of(MOCKED_VOTERS);
    }

    getVoters(): Observable<Voter[]> {
        return this.currentVoters$;
    }
}