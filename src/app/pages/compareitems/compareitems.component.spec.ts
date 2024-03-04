import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareitemsComponent } from './compareitems.component';

describe('CompareitemsComponent', () => {
  let component: CompareitemsComponent;
  let fixture: ComponentFixture<CompareitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompareitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
