import {AppComponent} from '../app/app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  })

  test('should have a title AngularJest', () => {
    expect(fixture.title).toEqual('AngularJest');
  })
})
