import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsPageComponent } from '../../../app/pokemons/pokemons-page/pokemons-page.component';
import {PokemonService} from '../../../app/pokemons/services/pokemon.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PokemonsPageComponent', () => {
  let component: PokemonsPageComponent;
  let fixture: ComponentFixture<PokemonsPageComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsPageComponent ],
      imports: [ HttpClientTestingModule],
      providers: [ PokemonService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de hacer match con el snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  test('debe mostrar un loading al inicio', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading ...');
  });

  test('debe de cargar a charizard inmediatamente', () => {
    const dummyPokemon = {
      name: 'charizardo!!',
      sprites: {
        front_default: 'https://charizard.com/sprite.png'
      }
    }

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);

    fixture.detectChanges();
    //console.log(compiled.innerHTML);
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent?.toLowerCase()).toContain(dummyPokemon.name.toLowerCase());
    expect(img?.src).toBe(dummyPokemon.sprites.front_default);
    expect(img?.src).toBe(dummyPokemon.sprites.front_default);

  })
});
