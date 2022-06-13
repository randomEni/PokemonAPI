import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../modeles/Pokemon";
import {PokedexService} from "../../services/pokedex.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  public pokedex: Pokemon[] = [];

  constructor(private srv: PokedexService) {
    this.pokedex = this.srv.getAllPokemon();
  }

  ngOnInit(): void {
  }


}
