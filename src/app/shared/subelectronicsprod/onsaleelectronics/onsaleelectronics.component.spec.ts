import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsaleelectronicsComponent } from './onsaleelectronics.component';

describe('OnsaleelectronicsComponent', () => {
  let component: OnsaleelectronicsComponent;
  let fixture: ComponentFixture<OnsaleelectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnsaleelectronicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnsaleelectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
