import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfurnitureComponent } from './newfurniture.component';

describe('NewfurnitureComponent', () => {
  let component: NewfurnitureComponent;
  let fixture: ComponentFixture<NewfurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewfurnitureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewfurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
