import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsectionComponent } from './projectsection.component';

describe('ProjectsectionComponent', () => {
  let component: ProjectsectionComponent;
  let fixture: ComponentFixture<ProjectsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
