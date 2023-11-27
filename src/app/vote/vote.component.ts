import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  selectedVoter = new FormControl('');
  selectedCandidate = new FormControl('');
  voterList: string[] = ['defaultValue'];
  candidateList: string[] = [];
  private _dataService: DataService;

  constructor(private dataService: DataService) {
    this._dataService = dataService;    
    this._dataService.getVoters().subscribe(voters => {
      this.voterList = voters.map(v => v.name);
    })
  }

  onSubmit(): void {
    console.log(`onSubmit, selected voter is ${this.selectedVoter}`);
  }
}
