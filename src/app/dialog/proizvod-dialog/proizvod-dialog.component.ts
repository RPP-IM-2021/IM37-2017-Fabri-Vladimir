import { ProizvodService } from './../../service/proizvod.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proizvodjac } from 'src/app/model/proizvodjac.model';
import { ProizvodjacService } from 'src/app/service/proizvodjac.service';
import { Proizvod } from 'src/app/model/proizvod.model';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-proizvod-dialog',
  templateUrl: './proizvod-dialog.component.html',
  styleUrls: ['./proizvod-dialog.component.css']
})
export class ProizvodDialogComponent implements OnInit {

  public flag: number;

  proizvodjaci: Proizvodjac[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ProizvodDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: Proizvod,
              public proizvodService: ProizvodService,
              public proizvodjacService: ProizvodjacService) { }

  ngOnInit(): void {
    this.proizvodjacService.getAllProizvodjac().subscribe(proizvodjaci => this.proizvodjaci = proizvodjaci);
  }

  public add(): void{
    this.proizvodService.addProizvod(this.data);
    this.snackBar.open('Proizvod: ' + this.data.naziv+ ' je uspešno dodat', 'Uredu', {duration:2000});
  }

  public update(): void{
    this.proizvodService.updateProizvod(this.data);
    this.snackBar.open('Proizvod: ' + this.data.naziv+ ' je uspešno ažuriran', 'Uredu' ,{duration:2000});
  }

  public delete():void{
    this.proizvodService.deleteProizvod(this.data.id);
    this.snackBar.open('Proizvod: '+this.data.id +' je uspešno izbrisan', 'Uredu', {duration:2000} );
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Akcija je obustavljena', 'Uredu', {duration:2000});
  }
}
