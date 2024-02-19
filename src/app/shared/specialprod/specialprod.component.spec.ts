import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialprodComponent } from './specialprod.component';

describe('SpecialprodComponent', () => {
  let component: SpecialprodComponent;
  let fixture: ComponentFixture<SpecialprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialprodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
