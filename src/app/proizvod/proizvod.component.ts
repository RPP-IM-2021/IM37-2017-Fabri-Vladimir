import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proizvod } from '../model/proizvod.model';
import { ProizvodService } from '../service/proizvod.service';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit {
  
  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];

  dataSource : Observable<Proizvod[]>;

  constructor(public proizvodService: ProizvodService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.dataSource = this.proizvodService.getAllProizvod();
  }
}
