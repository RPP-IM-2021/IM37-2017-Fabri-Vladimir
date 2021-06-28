import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Racun } from '../model/racun.model';
import { RacunService } from '../service/racun.service';

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {

  displayedColumns = ['id', 'datum', 'nacinPlacanja', 'actions'];

  dataSource: Observable<Racun[]>;

  constructor(public racunService: RacunService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.dataSource = this.racunService.getAllRacun();
  }
}
