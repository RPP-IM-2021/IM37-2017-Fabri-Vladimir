import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RacunService } from 'src/app/service/racun.service';
import { Racun } from 'src/app/model/racun.model';

@Component({
  selector: 'app-racun-dialog',
  templateUrl: './racun-dialog.component.html',
  styleUrls: ['./racun-dialog.component.css']
})
export class RacunDialogComponent implements OnInit {

  public flag:number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RacunDialogComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data:Racun,
              public racunService: RacunService) { }

  ngOnInit(): void {
  }

  public add(): void{
    this.racunService.addRacun(this.data);
    this.snackBar.open('Račun '+this.data.id+ ' je uspešno dodat', 'Uredu', {duration:2000});
  }

  public update(): void {
    this.racunService.updateRacun(this.data);
    this.snackBar.open('Račun '+this.data.id +' je uspešno ažuriran' , 'Uredu', {duration:2000});
  }

  public delete(): void {
    this.racunService.deleteRacun(this.data.id);
    this.snackBar.open('Račun '+this.data.id +' je uspešno izbrisan' , 'Uredu', {duration:2000});
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Akcija je obustavljena' , 'Uredu', {duration:2000});
  }
}
