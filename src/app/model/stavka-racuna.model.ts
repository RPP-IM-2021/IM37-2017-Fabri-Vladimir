import { Proizvod } from './proizvod.model';
import { Racun } from './racun.model';

export class StavkaRacuna{
    id: number;
    cena: number;
    jedinicaMere: string;
    kolicina: number;
    redniBroj: number;
    proizvod: Proizvod;
    racun: Racun;
}