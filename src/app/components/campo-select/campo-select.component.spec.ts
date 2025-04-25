import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoSelectComponent } from './campo-select.component';

describe('CampoSelectComponent', () => {
  let component: CampoSelectComponent;
  let fixture: ComponentFixture<CampoSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
