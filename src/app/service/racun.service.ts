import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { Racun } from '../model/racun.model';

@Injectable()
export class RacunService{

    private readonly API_URL = 'http://localhost:8082/racun/';
    
    datachange: BehaviorSubject<Racun[]> = new BehaviorSubject<Racun[]>([]);

    constructor(private httpClient: HttpClient){

    }

    public getAllRacun(): Observable<Racun[]> {
        this.httpClient.get<Racun[]>(this.API_URL).subscribe(data => {this.datachange.next(data);
        },
        (error: HttpErrorResponse) => {console.log(error.name + ' ' + error.message);});

        return this.datachange.asObservable();
    }

    public addRacun(racun: Racun): void {
        this.httpClient.post(this.API_URL, racun).subscribe();
    }
    
    public updateRacun(racun: Racun): void {
        this.httpClient.put(this.API_URL+racun.id, racun).subscribe();
    }

    public deleteRacun(id: number): void{
        this.httpClient.delete(this.API_URL+id).subscribe();
    }
}