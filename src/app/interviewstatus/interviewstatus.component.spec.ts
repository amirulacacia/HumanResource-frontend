import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewstatusComponent } from './interviewstatus.component';

describe('InterviewstatusComponent', () => {
  let component: InterviewstatusComponent;
  let fixture: ComponentFixture<InterviewstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewstatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
