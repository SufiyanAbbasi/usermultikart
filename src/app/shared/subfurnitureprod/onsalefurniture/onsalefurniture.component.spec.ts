import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsalefurnitureComponent } from './onsalefurniture.component';

describe('OnsalefurnitureComponent', () => {
  let component: OnsalefurnitureComponent;
  let fixture: ComponentFixture<OnsalefurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnsalefurnitureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnsalefurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
