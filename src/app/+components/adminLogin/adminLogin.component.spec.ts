import { ComponentFixture, TestBed } from '@angular/core/testing';

import { adminLoginComponent } from './adminLogin.component';

describe('LoginComponent', () => {
  let component: adminLoginComponent;
  let fixture: ComponentFixture<adminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ adminLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(adminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
