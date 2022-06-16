import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit {

  public charizard?: Pokemon;
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(6).subscribe(pokemon => {
      this.charizard = pokemon;
    });
  }

}
