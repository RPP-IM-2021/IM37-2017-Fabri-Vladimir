import { ProizvodService } from './../../service/proizvod.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { Proizvod } from 'src/app/model/proizvod.model';
import { Racun } from 'src/app/model/racun.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StavkaRacunaService } from 'src/app/service/stavka-racuna.service';
import { RacunService } from 'src/app/service/racun.service';
import { StavkaRacuna } from 'src/app/model/stavka-racuna.model';

@Component({
  selector: 'app-stavka-racuna-dialog',
  templateUrl: './stavka-racuna-dialog.component.html',
  styleUrls: ['./stavka-racuna-dialog.component.css']
})
export class StavkaRacunaDialogComponent implements OnInit {

  public flag: number;

  proizvodi: Proizvod[];
  racuni: Racun[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StavkaRacunaDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: StavkaRacuna,
              public stavkaRacunService: StavkaRacunaService,
              public proizvodService: ProizvodService,
              public racunService: RacunService) { }

  ngOnInit(): void {
    this.proizvodService.getAllProizvod().subscribe(proizvodi => this.proizvodi = proizvodi);
    this.racunService.getAllRacun().subscribe(racuni => this.racuni = racuni);
  }

  public add(): void{
    this.stavkaRacunService.addStavkaRacuna(this.data);
    this.snackBar.open('Stavka računa '+this.data.redniBroj+ ' je uspešno dodata', 'Uredu', {duration:2000});
  }

  public update(): void {
    this.stavkaRacunService.updateStavkaRacuna(this.data);
    this.snackBar.open('Stavka računa '+this.data.redniBroj+ ' je uspešno ažurirana', 'Uredu', {duration:2000});
  }

  public delete(): void {
    this.stavkaRacunService.deleteStavkaRacuna(this.data.id);
    this.snackBar.open('Stavka računa '+this.data.redniBroj+ ' je uspešno izbrisana', 'Uredu', {duration:2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Akcija je obustavljena', 'Uredu', {duration:2000});
  }

}
