import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAriProductosComponent } from './listar-ari-productos.component';

describe('ListarAriProductosComponent', () => {
  let component: ListarAriProductosComponent;
  let fixture: ComponentFixture<ListarAriProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAriProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAriProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
