import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FatherSonComponent} from '../../app/basic/father-son/father-son.component';


describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe ser hacer match on el snapshopt', () => {
    expect(compiled).toMatchSnapshot();
  })

  it('no deben aparecer botones si no hay cliente', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(0)
  })

  it('deben aparecer 2 botones si  hay cliente', () => {
    component.client = {id: 1, name: 'Juan'}
    fixture.detectChanges();
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(2)
  })


  it('si hay cliente, hacer match con e snapshot', () => {
    component.client = {id: 1, name: 'Juan'}
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot()
  })

  it ('debe de emitir onDeleteClient con el boton de eliminar', () => {
    component.client = {id: 1, name: 'Juan'}
    fixture.detectChanges();
    jest.spyOn(component.onDeleteClient, 'emit');
    const btnDelete = compiled.querySelector('[data-test=btn-delete]');
    btnDelete?.dispatchEvent(new Event('click'));
    expect(component.onDeleteClient.emit).toHaveBeenCalled();
    console.log(btnDelete?.innerHTML);
  })

});
