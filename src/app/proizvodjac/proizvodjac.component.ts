import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proizvodjac } from '../model/proizvodjac.model';
import { ProizvodjacService } from '../service/proizvodjac.service';

@Component({
  selector: 'app-proizvodjac',
  templateUrl: './proizvodjac.component.html',
  styleUrls: ['./proizvodjac.component.css']
})
export class ProizvodjacComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'adresa', 'kontakt', 'actions'];

  dataSource: Observable<Proizvodjac[]>;

  constructor(public proizvodjacService: ProizvodjacService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.dataSource = this.proizvodjacService.getAllProizvodjac();
  }
}
