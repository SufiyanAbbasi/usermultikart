import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestelectronicsComponent } from './bestelectronics.component';

describe('BestelectronicsComponent', () => {
  let component: BestelectronicsComponent;
  let fixture: ComponentFixture<BestelectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestelectronicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestelectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
