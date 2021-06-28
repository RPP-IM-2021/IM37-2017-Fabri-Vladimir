import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ProizvodComponent } from './proizvod/proizvod.component';
import { ProizvodjacComponent } from './proizvodjac/proizvodjac.component';
import { RacunComponent } from './racun/racun.component';
import { StavkaRacunaComponent } from './stavka-racuna/stavka-racuna.component';
import { HomeComponent } from './core/home/home.component';
import { AutorComponent } from './core/autor/autor.component';
import { AboutComponent } from './core/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ProizvodService } from './service/proizvod.service';
import { ProizvodjacService } from './service/proizvodjac.service';
import { RacunService } from './service/racun.service';
import { StavkaRacunaService } from './service/stavka-racuna.service';
import { ProizvodDialogComponent } from './dialog/proizvod-dialog/proizvod-dialog.component';
import { ProizvodjacDialogComponent } from './dialog/proizvodjac-dialog/proizvodjac-dialog.component';
import { RacunDialogComponent } from './dialog/racun-dialog/racun-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StavkaRacunaDialogComponent } from './dialog/stavka-racuna-dialog/stavka-racuna-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

const Routes = [{path: 'proizvod', component: ProizvodComponent},
                {path: 'proizvodjac', component: ProizvodjacComponent},
                {path: 'racun', component: RacunComponent}, 
                {path: 'stavkaRacuna', component: StavkaRacunaComponent},
                {path: 'home', component: HomeComponent}, 
                {path: 'autor', component: AutorComponent},
                {path: 'about', component: AboutComponent}, 
                {path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  declarations: [
    AppComponent,
    ProizvodComponent,
    ProizvodjacComponent,
    RacunComponent,
    StavkaRacunaComponent,
    HomeComponent,
    AutorComponent,
    AboutComponent,
    ProizvodDialogComponent,
    ProizvodjacDialogComponent,
    RacunDialogComponent,
    StavkaRacunaDialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,

  ],
  providers: [ProizvodService,ProizvodjacService,RacunService,StavkaRacunaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
