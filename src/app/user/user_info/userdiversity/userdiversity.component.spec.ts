import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdiversityComponent } from './userdiversity.component';

describe('UserdiversityComponent', () => {
  let component: UserdiversityComponent;
  let fixture: ComponentFixture<UserdiversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdiversityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserdiversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
