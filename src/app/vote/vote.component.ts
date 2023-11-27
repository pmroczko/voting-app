import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataService } from '../services/data.service';

interface SelectVoter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-vote',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss'
})

export class VoteComponent {
  selectedVoter = 'defaultValue';
  selectedCandidate = 'defaultValue';;
  voterList: string[] = [];
  candidateList: string[] = [];
  private _dataService: DataService;

  constructor(private dataService: DataService) {
    this._dataService = dataService;
    this._dataService.getVoters().subscribe(voters => {
      this.voterList = voters.map(v => v.name);
    })
    this._dataService.getCandidates().subscribe(candidate => {
      this.candidateList = candidate.map(c => c.name);
    })
  }

  onSubmit(): void {
    var result = this._dataService.vote(this.selectedVoter, this.selectedCandidate);
    if(result){
      console.log(`${this.selectedVoter} voted for ${this.selectedCandidate} successfully!`);
    } else {
      console.error(`Vote was not successful!`);
    }
  }
}
