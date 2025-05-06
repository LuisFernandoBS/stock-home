import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFinalizarComponent } from './dialog-finalizar.component';

describe('DialogFinalizarComponent', () => {
  let component: DialogFinalizarComponent;
  let fixture: ComponentFixture<DialogFinalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFinalizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
