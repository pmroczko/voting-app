import { Routes } from '@angular/router';
import { VotersComponent } from './voters/voters.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { VoteComponent } from './vote/vote.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: 'voters', component: VotersComponent},
    {path: 'candidates', component: CandidatesComponent},
    {path: 'vote', component: VoteComponent},
    {path: '', component: AboutComponent}
];
