import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelHistoricoComponent } from './painel-historico.component';

describe('PainelHistoricoComponent', () => {
  let component: PainelHistoricoComponent;
  let fixture: ComponentFixture<PainelHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
