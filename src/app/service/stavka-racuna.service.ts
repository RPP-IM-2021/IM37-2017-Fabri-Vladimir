import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { StavkaRacuna } from '../model/stavka-racuna.model';

@Injectable()
export class StavkaRacunaService {

    private readonly API_URL = 'http://localhost:8082/stavkaRacuna/';

    datachange: BehaviorSubject<StavkaRacuna[]> = new BehaviorSubject<StavkaRacuna[]>([]);

    constructor(private httpClient: HttpClient){

    }

    public getAllStavkaRacuna(): Observable<StavkaRacuna[]> {
        this.httpClient.get<StavkaRacuna[]>(this.API_URL).subscribe(data => {this.datachange.next(data);},
        (error : HttpErrorResponse) => {console.log(error.name+ ' '+error.message);});

        return this.datachange.asObservable();
    }

    public addStavkaRacuna(stavkaRacuna: StavkaRacuna): void {
        this.httpClient.post(this.API_URL, stavkaRacuna).subscribe();
    }
    
    public updateStavkaRacuna(stavkaRacuna: StavkaRacuna): void {
        this.httpClient.put(this.API_URL+stavkaRacuna.id, stavkaRacuna).subscribe();
    }

    public deleteStavkaRacuna(id: number): void{
        this.httpClient.delete(this.API_URL+id).subscribe();
    }
}