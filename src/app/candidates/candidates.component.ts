import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Candidate } from '../models';
import { DataService } from '../services/data.service';
import { VoteComponent } from "../vote/vote.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-candidates',
  standalone: true,
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.scss',
  imports: [CommonModule, MatTableModule, MatButtonModule, VoteComponent]
})
export class CandidatesComponent {
  private _dataService: DataService;
  fieldColumns = ['name', 'votes'];
  candidates: MatTableDataSource<Candidate> = new MatTableDataSource<Candidate>();

  constructor(private dataService: DataService) {
    this._dataService = dataService;
    this._dataService.getCandidates().subscribe(candidates => {
      this.candidates.data = candidates;
    })
  }

  onAdd() {
    this._dataService.addRandomCandidate();
  }
}
