import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCategoriasComponent } from './painel-categorias.component';

describe('PainelCategoriasComponent', () => {
  let component: PainelCategoriasComponent;
  let fixture: ComponentFixture<PainelCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelCategoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
