import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { Voter } from '../models';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-voters',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  providers: [DataService],
  templateUrl: './voters.component.html',
  styleUrl: './voters.component.scss'
})

export class VotersComponent{

  private _dataService: DataService;
  displayedColumns = ['name', 'hasVoted'];
  voters: Voter[] = [];

  constructor(private dataService: DataService) {
    this._dataService = dataService;
    
    this._dataService.getVoters().subscribe(voters => {
      this.voters = voters;
    })
  }

}
