import { TestBed } from '@angular/core/testing';

import { PokemonService } from '../../../app/pokemons/services/pokemon.service';
import {HttpClientModule} from '@angular/common/http';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('debe de traer información de charizard', (done) => {
    service.getPokemon(6).subscribe(pokemon => {
      console.log(pokemon);
      expect(pokemon.name).toBe('charizard');

      done();
    })
  })
});
