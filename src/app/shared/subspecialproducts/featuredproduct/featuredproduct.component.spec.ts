import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedproductComponent } from './featuredproduct.component';

describe('FeaturedproductComponent', () => {
  let component: FeaturedproductComponent;
  let fixture: ComponentFixture<FeaturedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
