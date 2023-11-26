import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

export interface Voter {
  name: string;
  hasVoted: boolean;
}

@Component({
  selector: 'app-voters',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './voters.component.html',
  styleUrl: './voters.component.scss'
})

export class VotersComponent {
  displayedColumns = ['name', 'hasVoted'];
  voters: Voter[] = [ 
    {name: 'voter1', hasVoted: false}, 
    {name: 'voter2', hasVoted: false}, 
    {name: 'voter3', hasVoted: false}
  ]
}
