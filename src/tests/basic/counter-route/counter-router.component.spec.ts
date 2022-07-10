import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouterComponent } from '../../../app/basic/counter-router/counter-router.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';

describe('CounterRouterComponent', () => {
  let component: CounterRouterComponent;
  let fixture: ComponentFixture<CounterRouterComponent>;

  it('debe tener el valor inicial en cero', async() => {
    await TestBed.configureTestingModule({
      declarations: [ CounterRouterComponent ],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CounterRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(0);
  })

  it('debe tener el valor inicial de 100 en a ruta /counter/100', async() => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return (param === 'initial') ? '100' : undefined
          }
        }
      }
    }
    await TestBed.configureTestingModule({
      declarations: [ CounterRouterComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CounterRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(100);
  })

  it('debe tener el valor inicial de 100 en a ruta /counter/20abc', async() => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return (param === 'initial') ? '20abc' : undefined
          }
        }
      }
    }
    await TestBed.configureTestingModule({
      declarations: [ CounterRouterComponent ],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CounterRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.counter).toBe(10);
  })
});
