import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarijuanaComponent } from './marijuana.component';

describe('MarijuanaComponent', () => {
  let component: MarijuanaComponent;
  let fixture: ComponentFixture<MarijuanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarijuanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarijuanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
