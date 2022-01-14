import { ComponentFixture, TestBed } from '@angular/core/testing';

import { requestPageComponent } from './request-page.component';

describe('requestPageComponent', () => {
  let component: requestPageComponent;
  let fixture: ComponentFixture<requestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ requestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(requestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
