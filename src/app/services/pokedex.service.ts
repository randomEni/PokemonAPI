import {Injectable} from '@angular/core';
import {Pokemon} from "../modeles/Pokemon";
import {firstValueFrom, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {


  public allPokemons: Pokemon [] = [];
  public origine: number = 1;
  public ending: number = 5;

  constructor(private http: HttpClient) {

  }


  getAllPokemon(): Pokemon[] {
    for (this.origine; this.origine < this.ending; this.origine++) {
      firstValueFrom(this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/" + this.origine)).then(
        data => this.allPokemons.push(data));
    }
    return this.allPokemons;
  }


  getListOrigine() {
    return this.origine
  }

  getListEnding() {
    return this.ending;
  }

  setLoopValues(origin: number, fin: number) {
    this.origine = origin;
    this.ending = fin;
  }


}//Eo Service
