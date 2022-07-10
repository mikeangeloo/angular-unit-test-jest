import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { FatherComponent } from './father/father.component';
import { FatherSonComponent } from './father-son/father-son.component';
import { CounterRouterComponent } from './counter-router/counter-router.component';



@NgModule({
  declarations: [
    CounterComponent,
    FatherComponent,
    FatherSonComponent,
    CounterRouterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
