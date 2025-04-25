import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoRadioComponent } from './campo-radio.component';

describe('CampoRadioComponent', () => {
  let component: CampoRadioComponent;
  let fixture: ComponentFixture<CampoRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampoRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
