import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have a title 'O Célio ama pizza'`, (() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('O Célio ama pizza');
   }));
});
