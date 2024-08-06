import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldsectionComponent } from './goldsection.component';

describe('GoldsectionComponent', () => {
  let component: GoldsectionComponent;
  let fixture: ComponentFixture<GoldsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoldsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
