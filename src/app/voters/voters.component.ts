import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Voter } from '../models';
import { DataService } from '../services/data.service';
import { VoteComponent } from "../vote/vote.component";


@Component({
  selector: 'app-voters',
  standalone: true,
  providers: [DataService],
  templateUrl: './voters.component.html',
  styleUrl: './voters.component.scss',
  imports: [CommonModule, MatTableModule, MatButtonModule, VoteComponent]
})

export class VotersComponent {
  private _dataService: DataService;
  fieldColumns = ['name', 'hasVoted'];
  voters: MatTableDataSource<Voter> = new MatTableDataSource<Voter>();

  constructor(private dataService: DataService) {
    this._dataService = dataService;
    this._dataService.getVoters().subscribe(voters => {
      this.voters.data = voters;
    })
  }

  onAdd() {
    this._dataService.addRandomVoter();
  }
}
