import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionpageComponent } from './interactionpage.component';

describe('InteractionpageComponent', () => {
  let component: InteractionpageComponent;
  let fixture: ComponentFixture<InteractionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
