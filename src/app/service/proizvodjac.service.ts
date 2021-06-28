import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Proizvodjac } from '../model/proizvodjac.model';

@Injectable()
export class ProizvodjacService{
    
    private readonly API_URL = 'http://localhost:8082/proizvodjac/';

    datachange: BehaviorSubject<Proizvodjac[]> = new BehaviorSubject<Proizvodjac[]>([]);

    constructor (private httpClient: HttpClient){

    }

    public getAllProizvodjac(): Observable<Proizvodjac[]> {
        this.httpClient.get<Proizvodjac[]>(this.API_URL).subscribe( data => {
            this.datachange.next(data);
        },
        (error : HttpErrorResponse) => {console.log(error.name + '' + error.message);});

        return this.datachange.asObservable();
    }

    public addProizvodjac(proizvodjac: Proizvodjac): void {
        this.httpClient.post(this.API_URL, proizvodjac).subscribe();
    }
    
    public updateProizvodjac(proizvodjac: Proizvodjac): void {
        this.httpClient.put(this.API_URL+proizvodjac.id, proizvodjac).subscribe();
    }

    public deleteProizvodjac(id: number): void{
        this.httpClient.delete(this.API_URL+id).subscribe();
    }
}