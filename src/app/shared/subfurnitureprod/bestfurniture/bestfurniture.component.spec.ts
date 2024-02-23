import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestfurnitureComponent } from './bestfurniture.component';

describe('BestfurnitureComponent', () => {
  let component: BestfurnitureComponent;
  let fixture: ComponentFixture<BestfurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestfurnitureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestfurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
