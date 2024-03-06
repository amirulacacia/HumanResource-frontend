import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSideNavComponent } from './employee-side-nav.component';

describe('EmployeeSideNavComponent', () => {
  let component: EmployeeSideNavComponent;
  let fixture: ComponentFixture<EmployeeSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
