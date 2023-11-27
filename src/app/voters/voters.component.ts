import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
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
  fieldColumns = ['name', 'hasVoted'];  
  displayedColumns = this.fieldColumns.concat('headerButton');
  voters: MatTableDataSource<Voter> = new MatTableDataSource<Voter>();

  constructor(private dataService: DataService) {
    this._dataService = dataService;    
    this._dataService.getVoters().subscribe(voters => {
      this.voters.data = voters;
    })
  }

  i: number = 0;
  onAdd() {
    this._dataService.addVoter({name: 'name '+(this.i++), 'hasVoted': false});
  }

}
