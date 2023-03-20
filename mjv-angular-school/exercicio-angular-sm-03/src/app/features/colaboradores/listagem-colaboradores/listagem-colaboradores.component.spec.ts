import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemColaboradoresComponent } from './listagem-colaboradores.component';

describe('ListagemColaboradoresComponent', () => {
  let component: ListagemColaboradoresComponent;
  let fixture: ComponentFixture<ListagemColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemColaboradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
