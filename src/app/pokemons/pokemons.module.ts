import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import {PokemonsPageComponent} from './pokemons-page/pokemons-page.component';


@NgModule({
  declarations: [
    PokemonsPageComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule { }
