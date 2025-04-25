import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoAutocompleteComponent } from './campo-autocomplete.component';

describe('CampoAutocompleteComponent', () => {
  let component: CampoAutocompleteComponent;
  let fixture: ComponentFixture<CampoAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampoAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
