import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRequestPageComponent } from './form-request-page.component';

describe('FormRequestPageComponent', () => {
  let component: FormRequestPageComponent;
  let fixture: ComponentFixture<FormRequestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRequestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
