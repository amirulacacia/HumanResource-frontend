import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinformationpageComponent } from './userinformationpage.component';

describe('UserinformationpageComponent', () => {
  let component: UserinformationpageComponent;
  let fixture: ComponentFixture<UserinformationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserinformationpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserinformationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
