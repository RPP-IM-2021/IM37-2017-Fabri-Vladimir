import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProizvodjacService } from 'src/app/service/proizvodjac.service';
import { Proizvodjac } from 'src/app/model/proizvodjac.model';

@Component({
  selector: 'app-proizvodjac-dialog',
  templateUrl: './proizvodjac-dialog.component.html',
  styleUrls: ['./proizvodjac-dialog.component.css']
})
export class ProizvodjacDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ProizvodjacDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: Proizvodjac,
              public proizvodjacService: ProizvodjacService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.proizvodjacService.addProizvodjac(this.data);
    this.snackBar.open('Proizvodjač '+this.data.naziv+ ' je uspešno dodat', 'Uredu', {duration:2000});
  }

  public update(): void{
    this.proizvodjacService.updateProizvodjac(this.data);
    this.snackBar.open('Proizvodjač '+this.data.naziv+ ' je uspešno ažuriran', 'Uredu', {duration:2000});
  }

  public delete(): void{
    this.proizvodjacService.deleteProizvodjac(this.data.id);
    this.snackBar.open('Proizvodjač '+this.data.id+ ' je uspešno izbrisan', 'Uredu', {duration:2000});
  }

  public cancel(): void{
    this.dialogRef.close();
    this.snackBar.open('Akcija je obustavljena', 'Uredu', {duration:2000});
  }

}
