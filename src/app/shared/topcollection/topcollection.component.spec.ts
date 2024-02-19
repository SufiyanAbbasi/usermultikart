import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcollectionComponent } from './topcollection.component';

describe('TopcollectionComponent', () => {
  let component: TopcollectionComponent;
  let fixture: ComponentFixture<TopcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopcollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
