import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashtrendComponent } from './fashtrend.component';

describe('FashtrendComponent', () => {
  let component: FashtrendComponent;
  let fixture: ComponentFixture<FashtrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FashtrendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FashtrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
